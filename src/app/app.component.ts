import { Component } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'science';
  courses:string[]=["course1","course2","courses3"]

  articles=[{
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },
  {
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },
  {
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },
]
email:string="roselynisimeto@gmail.com";

  onSave() {
    console.log("save clicked");
  }

  onKeyUp(){
    alert(this.email)
  }
  
  firstnumber:string;
  secondnumber:string;
  result:number;
  add(){
    this.result=parseFloat(this.firstnumber)+parseFloat(this.secondnumber);
  }  



}
