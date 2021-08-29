import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
    FooterComponent
  ],
    imports: [
 MaterialModule, MDBBootstrapModule.forRoot(),BrowserAnimationsModule,CommonModule,
 RouterModule
    ],
    providers: [],
    bootstrap: [],
    exports:[FooterComponent]
  })
  export class AppModuleFooter { }