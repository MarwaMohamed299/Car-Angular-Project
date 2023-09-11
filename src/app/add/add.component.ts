import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {
  constructor(public myService:ServiceService){}
  Users:any=[];
  ADD(name:any,email:any,phone:any,street:any,suite:any,city:any){
    let newUser = {name,  email, phone,street ,suite,city};
    this.myService.AddUser(newUser).subscribe();
  }

}
