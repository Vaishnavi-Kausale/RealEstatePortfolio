
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeMenuComponent } from "./home-menu/home-menu.component";
import { PropertyDetailsComponent } from "./property-details/property-details.component";
import { PropertyListComponent } from "./property-list/property-list.component";
import { HomeComponent } from "./home.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NewPropertyComponent } from './new-property/new-property.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeMenuComponent,
    PropertyDetailsComponent,
    PropertyListComponent,
    NewPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
  ],
  exports: [
  ]
})
export class HomeModule { }
