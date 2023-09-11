import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users:any=[];
  
 constructor (public myService:ServiceService){
  myService.GetAllUsers().subscribe(
    {
      next:(data)=>{
        console.log(data);
       this.users=data},
      error:(err)=>{console.log(err)}
    }
    
  )
 }
//  
ADD(name:any,email:any,phone:any,street:any,suite:any,city:any){
  let address ={ city: city, street: street, suite: suite};
  let newUser = {name, email, phone, address};
  this.myService.AddUser(newUser).subscribe({
    next:()=>{
      this.users.push(newUser);
    },
    error:(err) =>{console.log(err);}
  });
  console.log(newUser)
}
//  ADD(name:any,email:any,phone:any,street:any,suite:any,city:any){
//   let newUser = {name,  email, phone,street ,suite,city};
//   this.myService.AddUser(newUser).subscribe();
}

