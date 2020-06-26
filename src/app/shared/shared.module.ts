import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "./admin.component";
import { ContactComponent } from "./contact.component";
import { HomeComponent } from "./home.component";
import { ErrorComponent } from "./error.component";

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ErrorComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
