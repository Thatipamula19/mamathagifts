import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material.module';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { DateSortPipe } from './Pipe/date-sort.pipe';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';




@NgModule({
    declarations: [
    UserInfoComponent,

    UserProfileComponent,
      UserAddressComponent,
      DateSortPipe,
      UserRegistrationComponent,
      UserOrdersComponent,
      
      
  ],
    imports: [
      MaterialModule, ReactiveFormsModule, FormsModule, CommonModule, BreadcrumbModule, BrowserAnimationsModule, 
      BrowserModule, MDBBootstrapModule.forRoot()
  
    ],
    providers: [],
    bootstrap: [],
    exports:[UserInfoComponent]
  })
  export class AppModuleUsers { }