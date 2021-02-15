import { Component } from '@angular/core';
import {Post} from '../main-page/main-page.component';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent {

  constructor() { }

  allAdverts:Post[]=[

  ]
  viewAllAdverts(){
    let arr=[];
    let keys = Object.keys(localStorage);
    for(let key of keys) {
      if(key!='dataUser')arr.push(JSON.parse(localStorage.getItem(key)));
    }
    this.allAdverts=arr.sort((a,b)=>(b.id - a.id));
  }

}
