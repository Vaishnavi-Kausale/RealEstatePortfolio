import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { PropertyService } from 'src/app/services/property.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent {

  id:number = 0
  propertyObj:any
  uploadPhoto = false;
  titlephoto: any;
  constructor(private act_route:ActivatedRoute, private propertyService:PropertyService,
    private photoService:PhotoService, private http:HttpClient){
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
    if(photoIdList.length>0) {
      this.getPhoto(photoIdList[0]);
    }
  })
}

getPhoto(photoid:number)
{
  this.photoService.getphotobyId(photoid).subscribe((res:any) => {
    this.titlephoto = res.image;
  });
}


UpdatePropertyStatus(form:NgForm)
{
  console.log("update property status")
  console.log(form.value)
  const obj = {
    propertyid:this.id,
	  status: form.value.SelectPropertyStatus
  }
  this.http.post(environment.apiBaseUrl+'/property/update-property-status',obj).subscribe(res => {
    this.propertyObj = res;
  });
}

changeSource(event:any)
{
  event.target.src = "assets/realeaste-photo/default_property.png";
}
}
