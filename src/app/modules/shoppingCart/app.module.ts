import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';

@NgModule({
    declarations: [
    ShoppingCartComponent,
    EmptyCartComponent
  ],
    imports: [
  MaterialModule,CommonModule,BrowserAnimationsModule, AngularFireDatabaseModule, MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    exports:[ShoppingCartComponent]
  })
  export class AppModuleShoppingCart { }