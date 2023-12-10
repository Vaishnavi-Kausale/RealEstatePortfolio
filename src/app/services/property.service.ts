import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  propertList = [
    {
      id:1,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/1.jpeg'
    },
    {
      id:2,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/2.jpeg'
    },
    {
      id:3,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/3.jpeg'
    },
    {
      id:4,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/4.jpeg'
    },
    {
      id:5,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/5.jpeg'
    },
    {
      id:6,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/6.jpeg'
    },
    {
      id:7,
      title:'2BHK on rent',
      rent:22000,
      deposite:50000,
      additionalcharges:0,
      description:'2BHK 800sq flat on rent at dange chowk',
      imageurl: 'assets/realeaste-photo/7.jpeg'
    }
  ]

  constructor(private http:HttpClient) { }

  getall():Observable<any>
  {
    return this.http.get(environment.apiBaseUrl+'/property/getall').pipe(mergeMap(obj => {
      return of(obj);
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
