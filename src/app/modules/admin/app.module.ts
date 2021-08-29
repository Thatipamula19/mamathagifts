import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/material.module';
import { AppModuleProduct } from '../product/app.module';
import { AddProductComponent } from '../product/components/add-product/add-product.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import { OrderSortPipe } from './Pipes/order-sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
    AdminProductsComponent,
    AllOrdersComponent,
    OrderDetailsComponent,
    OrderSortPipe,
  ],
    imports: [
      MaterialModule,CommonModule,BrowserAnimationsModule, AppModuleProduct, RouterModule,
      ReactiveFormsModule, FormsModule, WavesModule,TableModule,IconsModule,
      MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    exports:[AdminProductsComponent, AllOrdersComponent],
    entryComponents:[AddProductComponent]
  })
  export class AppModuleAdmin { }