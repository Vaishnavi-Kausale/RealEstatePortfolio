import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent {

  constructor(private proprtyService:PropertyService, private router: Router){

  }

  add_new_property(form:NgForm)
  {
    console.log(form.value)
    this.proprtyService.createNewProperty(form.value).subscribe(res => {
      console.log('Returned response')
      console.log(res);
      this.router.navigateByUrl('/home/details/'+res.id);
    });
  }
}
