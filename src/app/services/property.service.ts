import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  propertList = []



  constructor(private http:HttpClient) { }

  getall(pagenumber:number):Observable<any>
  {
    return this.http.get(environment.apiBaseUrl+'/property/getall/'+pagenumber).pipe(mergeMap((obj:any) => {
      return of(obj.content);
    }))
  }

  get(id:number) : Observable<any>
  {
    return this.http.get(environment.apiBaseUrl+'/property/get/'+id).pipe(mergeMap(obj => {
      return of(obj);
    }))
  }

  createNewProperty(obj:any):Observable<any>
  {
    return this.http.post(environment.apiBaseUrl + '/property/create', obj).pipe(mergeMap(obj => {
      return of(obj);
    }));
  }
}
