import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactusComponent } from './components/contactus/contactus.component';


@NgModule({
    declarations: [
    AboutComponent,
    HomeComponent,
    OurproductsComponent,
    OurServicesComponent,
    ContactusComponent,
    

  ],
    imports: [
    MaterialModule,  AppRoutingModule,MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleCommon { }