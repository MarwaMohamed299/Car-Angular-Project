import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3';
  constructor(public myService:ServiceService){}
  Users:any=[];


  ADD(name:any,email:any,phone:any,street:any,suite:any,city:any){
    let address ={ city: city, street: street, suite: suite};
    let newUser = {name, email, phone, address};
    this.myService.AddUser(newUser).subscribe({
      next:()=>{
        this.Users.push(newUser);
      },
      error:(err) =>{console.log(err);}
    });
    console.log(newUser)
  }
  
}
