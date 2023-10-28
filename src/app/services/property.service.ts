import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

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

  constructor() { }

  getall()
  {
    return this.propertList;
  }

  get(id:number)
  {
    return this.propertList.filter(p => p.id==id)
  }
}
