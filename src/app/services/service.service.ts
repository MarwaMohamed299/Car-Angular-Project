import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private readonly myClient:HttpClient) { }
private readonly Base_URL_Albums="http://localhost:3000/albums";
   private readonly Base_URL_photos="http://localhost:3000/photos";
  private readonly Base_URL1 = "http://localhost:3000/users";

GetAllUsers(){
  return this.myClient.get(this.Base_URL1);
}
GetUserByID(id:any){
  return this.myClient.get(this.Base_URL1+"/"+id);
}
AddUser(newUser:any){
  return this.myClient.post(this.Base_URL1, newUser);
}
GetAllAlbums(){
  return this.myClient.get(this.Base_URL_Albums);
}
GetAlbumByID(id:any){
  return this.myClient.get(this.Base_URL_Albums+"/"+id);
}
GetAllphotos(){
  return this.myClient.get(this.Base_URL_photos);
}
GetPhotosByAlbumId(id:any){
  return this.myClient.get(this.Base_URL_photos+"?albumId="+id);
}




}