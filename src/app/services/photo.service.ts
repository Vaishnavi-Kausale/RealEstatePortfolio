import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  //upload photo
uploadPhoto(img:any,property_id:number)
{
  const property_obj = {
    propertyid: property_id,
		image: img
  }

  return this.http.post(environment.apiBaseUrl + '/image/upload', property_obj).pipe(mergeMap(obj => {
    return of(obj);
  }));
}

  //get photo by id
  getphotobyId(id:number)
  {
    return this.http.get(environment.apiBaseUrl+'/image/get/'+id).pipe(mergeMap(res => {
      return of(res)
    }));
  }

  //get property photo list
  getPhotoListByPropertyId(propertyid:number)
  {
    return this.http.get(environment.apiBaseUrl+'/image/getpropertyphotolist/'+propertyid).pipe(mergeMap(res => {
      return of(res)
    }));
  }



}
