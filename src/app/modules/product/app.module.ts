import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { ProductService } from './services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductSortPipe } from './product-sort.pipe';







@NgModule({
    declarations: [
    ProductsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductSortPipe,
    
    
    
  ],
    imports: [
      MaterialModule,CommonModule,ReactiveFormsModule,FormsModule,BrowserModule,BrowserAnimationsModule,
      SwiperModule, HttpClientModule, NgxGalleryModule, MDBBootstrapModule.forRoot(),
    ],
    providers: [ProductService],
    bootstrap: [],
    exports: [ProductsComponent],
   
  })
  export class AppModuleProduct { }