import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailseComponent } from './user-detailse/user-detailse.component';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailseComponent},
  {path:"add", component:AddComponent},
  { path: 'photos/:albumId', component:PhotosComponent },
  {path:"**", component:ErrorComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
