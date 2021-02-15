import { Component  } from '@angular/core';

export class User{
  name:string;
  surname:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent  {


  constructor() { }
    newUser:User=new User();

     addUser(){
          localStorage.setItem('dataUser',JSON.stringify({
                name:this.newUser.name,
                surname:this.newUser.surname,
                email:this.newUser.email,
                phone:this.newUser.phone
              }))
       }

}
