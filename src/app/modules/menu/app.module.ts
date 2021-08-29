import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [
    MenuComponent
  ],
    imports: [
      MaterialModule,AppRoutingModule,BrowserModule,MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    exports:[MenuComponent]

  })
  export class AppModuleMenu { }