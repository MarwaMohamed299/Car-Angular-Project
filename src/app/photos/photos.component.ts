// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-photos',
//   templateUrl: './photos.component.html',
//   styles: [
//   ]
// })
// export class PhotosComponent {

// }
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
 styles: []
})
export class PhotosComponent {
  photos: any;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

   ngOnInit(): void {
     const albumId = this.route.snapshot.params['albumId'];
     this.service.GetPhotosByAlbumId(albumId).subscribe({
       next: (response) => {
        console.log(response)
         this.photos = JSON.parse(JSON.stringify(response))
         console.log(this.photos.url)
         //this.photos = JSON.stringify(photos);
       },
       error: (err) => {
         console.log(err);
       }
     });
   }
// }
// }
// ngOnInit(): void {
//   const albumId = this.route.snapshot.params['albumId'];
//   this.service.GetPhotosByAlbumId(albumId).subscribe({
//     next: (photos) => {
//       if (Array.isArray(photos)) {
//         this.photos = photos;
//       } else {
//         this.photos = [photos];
//       }
//     },
//     error: (err) => {
//       console.log(err);
//     }
//   });
// }
// }
// ngOnInit(): void {
//   const albumId = this.route.snapshot.params['albumId'];
//   this.service.GetPhotosByAlbumId(albumId).subscribe({
//     next: (photos) => {
//       if (Array.isArray(photos)) { // check if photos is an array
//         this.photos = photos.slice(0, 12); // get only the first 12 photos
//       } else {
//         console.error('Invalid data format: photos is not an array');
//       }
//     },
//     error: (err) => {
//       console.log(err);
//     }
//   });
// }
// }

}