import { Component } from '@angular/core';
export interface Post{
  title:string,
  text:string,
  name:string,
  surname:string,
  email:string,
  phone:number,
  year:number,
  month:number,
  day:number,
  hours:any,
  minutes:any,
  id?:number

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  constructor() { }

  allPosts:Post[]=[]

  updatePosts(post:Post){
    const datenow =String(Date.now());
    localStorage.setItem(datenow,JSON.stringify(post))
    let arr=[];
    let keys = Object.keys(localStorage);
    for(let key of keys) {
      if(key!='dataUser')arr.push(JSON.parse(localStorage.getItem(key)));
    }
    this.allPosts=arr.sort((a,b)=>(b.id - a.id));
  }

}
