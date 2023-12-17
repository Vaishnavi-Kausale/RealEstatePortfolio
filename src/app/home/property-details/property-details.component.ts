import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {

  id:number = 0
  propertyObj:any
  uploadPhoto = false;
  photoList: Array<string> = []
  constructor(private act_route:ActivatedRoute, private propertyService:PropertyService, private photoService:PhotoService){
}



ngOnInit(): void {
  this.id = Number(this.act_route.snapshot.paramMap.get('id'))
  this.propertyService.get(this.id).subscribe(obj => {
    console.log(obj);
    this.propertyObj = obj;
  });
  this.getPhotoList();
}

getPhotoList()
{
  this.photoService.getPhotoListByPropertyId(this.id).subscribe((res:any) => {
    console.log(res);
    const photoIdList = res;
    photoIdList.forEach((el:any) => {
      this.getPhoto(el);
    });
  })
}

getPhoto(photoid:number)
{
  this.photoService.getphotobyId(photoid).subscribe((res:any) => {

    this.photoList.push(res.image);
    console.log(res);
  });
}

}
