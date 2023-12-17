
import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  pagenumber = 0;

  constructor(private propertyservice:PropertyService, private photoService:PhotoService)
  {

  }

  propertList: any

  ngOnInit(): void {
    this.getPropertyList()
  }

  getPropertyList()
  {
    this.propertyservice.getall(this.pagenumber).subscribe(obj => {
      this.propertList = obj;
      this.getImages()
    })
  }

  changeSource(event:any)
  {
    event.target.src = "assets/realeaste-photo/default_property.png";
  }

  getImages()
  {
    this.propertList.forEach((el:any) => {
      this.photoService.getPhotoListByPropertyId(el.id).subscribe((res:any) => {
        if(res.length>0) {
        this.photoService.getphotobyId(res[0]).subscribe((res2:any) => {
          console.log(res2.image)
          el.imageurl = res2.image
        });
      }
      });
    })
  }

  nextPage()
  {
    this.pagenumber = this.pagenumber + 1;
    this.getPropertyList()
  }

  previousPage()
  {
    if(this.pagenumber>0) {
    this.pagenumber = this.pagenumber-1;
    this.getPropertyList();
  }
}
}
