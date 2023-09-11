import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user-detailse',
  templateUrl: './user-detailse.component.html',
  styles: [
  ]
})
export class UserDetailseComponent {
  ID = 1;
  user:any;
  albums:any;


  constructor(myRoute:ActivatedRoute,public myService:ServiceService){
    this.ID = myRoute.snapshot.params["id"];
    this.albums=myRoute.snapshot.params["albums"];
  }
 ngOnInit(): void {
  this.myService.GetUserByID(this.ID).subscribe({
    next: (user) => {
      this.user = JSON.parse(JSON.stringify(user))

    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      this.myService.GetAllAlbums().subscribe({
        next: (albums) => {
          this.albums = Object.values(albums).filter((a: any) => a.userId === this.user.id);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  });
}
  
}
  // ngOnInit(): void {
  //   this.myService.GetUserByID(this.ID).subscribe(
  //     {
  //       next:(data)=>{
  //       //  console.log(data)
  //         this.user = data;
  //       },
  //       error:(err)=>{console.log(err)}
  //     }
  //   )
    // this.myService.GetAlbumByID(this.albums).subscribe(
    //   {
    //     next:(data)=>{
    //       //  console.log(data)
    //         this.albums = data;
    //       },
    //       error:(err)=>{console.log(err)}

    //   }
 //  )
