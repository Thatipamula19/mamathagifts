import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material.module';
import { OrdersComponent } from './components/orders/orders.component';
import { SucessOrderComponent } from './components/sucess-order/sucess-order.component';
import { CartOrdersComponent } from './components/cart-orders/cart-orders.component';

@NgModule({
    declarations: [
    OrdersComponent,
    SucessOrderComponent,
    CartOrdersComponent
  ],
    imports: [
      MaterialModule, ReactiveFormsModule, FormsModule, BrowserModule, BrowserAnimationsModule,
      MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    exports:[OrdersComponent]
  })
  export class AppModuleOrders{ }