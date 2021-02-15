import { Component, Output ,EventEmitter} from '@angular/core';
import {Post} from '../main-page/main-page.component';
import {User} from '../authorization/authorization.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})


export class PostFormComponent {
  @Output() onAdd = new EventEmitter<Post>()

  newUser:User=new User();
  title='';
  text='';

  hours:any;
  minutes:any;



  addPost(){
    if(this.title.trim() && this.text.trim()){
      if(new Date().getHours()<10){
        this.hours=('0'+new Date().getHours())
      }else{
        this.hours=new Date().getHours()
      };
      if(new Date().getMinutes()<10){
        this.minutes=('0'+new Date().getMinutes())
      }else{
        this.minutes=new Date().getMinutes()
      };
      const mypost:Post={
        title:this.title,
        text:this.text,
        name:JSON.parse(localStorage.getItem('dataUser')).name,
        surname:JSON.parse(localStorage.getItem('dataUser')).surname,
        email:JSON.parse(localStorage.getItem('dataUser')).email,
        phone:JSON.parse(localStorage.getItem('dataUser')).phone,
        year:new Date().getFullYear(),
        month:(new Date().getMonth()+1),
        day:(new Date().getDate()),
        hours:this.hours,
        minutes:this.minutes,
        id:Date.now()
      }
      this.onAdd.emit(mypost)

        this.title=this.text='';
    }
  }
}
