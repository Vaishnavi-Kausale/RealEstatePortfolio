import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PropertyListComponent } from "./property-list/property-list.component";
import { PropertyDetailsComponent } from "./property-details/property-details.component";
import { NewPropertyComponent } from "./new-property/new-property.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'list',
        component: PropertyListComponent
      },
      {
        path: 'details/:id',
        component: PropertyDetailsComponent
      },
      {
        path: 'add-new-property',
        component: NewPropertyComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
