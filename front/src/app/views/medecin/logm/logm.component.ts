import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-logm',
  templateUrl: './logm.component.html',
  styleUrls: ['./logm.component.css']
})
export class LogmComponent {
  f: any
  l: any
  constructor(private http: HttpClient, private router: Router, private share: ShareService) {
    this.f = false
    this.l = false
    localStorage.setItem("name", "hhh")
    this.c = localStorage.getItem("name")
    console.log(this.c)
    this.share.x = false
  }
  d: any

  c: any

  add(f: any) {
    this.d = f.value






    this.http.post('http://127.0.0.1:8000/logm/', this.d).subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        const m = data[0];

        console.log(m)
        if (m == "ne") { this.l = true }
        else if (m == "nc") { this.f = true }
        else {


          localStorage.setItem("name", m["name"])
          localStorage.setItem("id", m["id"])
          localStorage.setItem("x", "t")

          console.log(localStorage.getItem("id"))
          this.share.x = true


          this.router.navigate(['/medecin']);
        }


      }
    });
    console.log(this.d)
  }
}


