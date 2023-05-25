import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-chatp',
  templateUrl: './chatp.component.html',
  styleUrls: ['./chatp.component.css']
})
export class ChatpComponent {
  c: any;
  k: any = [];
  l: any
  m: any

  constructor(private http: HttpClient, private router: Router, private share: ShareService) {
    this.c = localStorage.getItem('name');
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:8000/msg/' + this.c).subscribe((data) => {
      this.k = data;
      this.l = this.k.length
      console.log(this.k[0].mesg)
      window.scrollTo(0, document.body.scrollHeight);


    });
  }

  po(form: NgForm) {
    const d = form.value;
    console.log(d);
    d["nome"] = this.c;
    d["nomc"] = "cp";
    console.log(d);
    this.http.post('http://127.0.0.1:8000/m/', d).subscribe(data => {
      this.m = data;
      this.l = this.k.length

      if (this.m[0].mesg == "page rdv") {
        this.router.navigate(['/patient/rdv'])


      }
      if (this.m[0].mesg == "edit") {
        this.router.navigate(['/patient/em'])


      }
      if (this.m[0].mesg == "logout") {
        localStorage.clear();
        this.share.y = false
        this.router.navigate(['/']);
      }
      if (this.m[0].mesg == "okk") {
        this.router.navigate(['/patient/prdv'])
      }
      this.getData(); // Mettre à jour les données
    });
  }
}