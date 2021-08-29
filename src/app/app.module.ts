import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';

//Modules
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuth } from './modules/auth/app.module';
import { AppModuleCommon } from './modules/common/app.module';
import { AppModuleMenu } from './modules/menu/app.module';
import { AppModuleOrders } from './modules/orders/app.module';
import { AppModulePayment } from './modules/payment/app.module';
import { AppModuleProduct } from './modules/product/app.module';
import { AppModuleShoppingCart } from './modules/shoppingCart/app.module';
import { AppModuleUsers } from './modules/users/app.module';
import { MaterialModule } from './material.module';
import { AppModuleFooter } from './modules/footer/app.module';
import { AppModuleHeader } from './modules/header/app.module';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ShoppingCartService } from './modules/shoppingCart/services/shopping-cart.service';
import { ProductService } from './modules/product/services/product.service';
import { OrderService } from './modules/orders/services/order.service';
import { LoginService } from './modules/auth/services/login.service';
import { AdminService } from './modules/admin/services/admin.service';
import { UsersService } from './modules/users/services/users.service';
import { AppModulePipes } from './modules/Pipes/app.module';





@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SwiperModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,AngularFireStorageModule,AngularFireAuthModule,
    
    //App Modules
    AppModuleAdmin,AppModuleAuth,AppModuleCommon,AppModuleFooter,AppModuleHeader,
    AppModuleMenu,AppModuleOrders,AppModulePayment,AppModulePipes,
    AppModuleProduct,AppModuleShoppingCart,AppModuleUsers,
    MaterialModule,ReactiveFormsModule,FormsModule,MDBBootstrapModule.forRoot(),
    HttpClientModule, NgxGalleryModule

  ],
  providers: [ShoppingCartService,ProductService,OrderService,LoginService,AdminService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
