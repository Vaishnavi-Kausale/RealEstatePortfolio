import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {

  id:number = 0
  propertyObj:any
  constructor(private act_route:ActivatedRoute, private propertyService:PropertyService){
}
ngOnInit(): void {
  this.id = Number(this.act_route.snapshot.paramMap.get('id'))
  this.propertyObj = this.propertyService.get(this.id)[0]
}
}
