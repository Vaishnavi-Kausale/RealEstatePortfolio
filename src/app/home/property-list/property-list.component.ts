
import { Component } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  constructor(private propertyservice:PropertyService)
  {

  }

  propertList: any

  ngOnInit(): void {
    this.propertyservice.getall().subscribe(obj => {
      this.propertList = obj;
    })
  }

  changeSource(event:any)
  {
    event.target.src = "assets/realeaste-photo/default_property.png";
  }
}
