import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-em',
  templateUrl: './em.component.html',
  styleUrls: ['./em.component.css']
})
export class EmComponent {
  k: any


  constructor(private http: HttpClient) {
    console.log(localStorage.getItem("id"))
    this.http.get('http://127.0.0.1:8000/em/' + localStorage.getItem("id")).subscribe(data => this.k = data)


  }
  s: any
  add(f: any) {
    console.log(f.value)

    this.s = f.value


    console.log(this.s)
    console.log(localStorage.getItem("id"))
    this.http.put('http://127.0.0.1:8000/pem/' + localStorage.getItem("id") + '/', this.s).subscribe(data => console.log(data))

  }
}
