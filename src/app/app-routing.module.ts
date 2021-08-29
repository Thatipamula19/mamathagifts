import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './modules/admin/components/admin-products/admin-products.component';
import { AllOrdersComponent } from './modules/admin/components/all-orders/all-orders.component';
import { OrderDetailsComponent } from './modules/admin/components/order-details/order-details.component';
import { AdminService } from './modules/admin/services/admin.service';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginService } from './modules/auth/services/login.service';
import { AboutComponent } from './modules/common/components/about/about.component';
import { ContactusComponent } from './modules/common/components/contactus/contactus.component';
import { HomeComponent } from './modules/common/components/home/home.component';
import { CartOrdersComponent } from './modules/orders/components/cart-orders/cart-orders.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { SucessOrderComponent } from './modules/orders/components/sucess-order/sucess-order.component';
import { AddProductComponent } from './modules/product/components/add-product/add-product.component';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { ProductsComponent } from './modules/product/components/products/products.component';
import { EmptyCartComponent } from './modules/shoppingCart/components/empty-cart/empty-cart.component';
import { ShoppingCartComponent } from './modules/shoppingCart/components/shopping-cart/shopping-cart.component';
import { UserAddressComponent } from './modules/users/components/user-address/user-address.component';
import { UserInfoComponent } from './modules/users/components/user-info/user-info.component';
import { UserOrdersComponent } from './modules/users/components/user-orders/user-orders.component';
import { UserProfileComponent } from './modules/users/components/user-profile/user-profile.component';
import { UserRegistrationComponent } from './modules/users/components/user-registration/user-registration.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add-product', component: AddProductComponent,canActivate:[LoginService]},
  {path:'add-product/:id', component: AddProductComponent,canActivate:[LoginService]},
  {path:'products', component: ProductsComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'about', component: AboutComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'admin-products', component: AdminProductsComponent, canActivate:[LoginService,AdminService]},
  {path:'success-order/:id', component: SucessOrderComponent,},
  {path:'orders/:id', component: OrdersComponent,canActivate:[LoginService]},
  {path:'cart-orders', component: CartOrdersComponent,canActivate:[LoginService]},
  {path:'all-orders', component: AllOrdersComponent,canActivate:[LoginService]},
  {path:'order-details/:id', component: OrderDetailsComponent,canActivate:[LoginService]},
  {path:'user-address', component: UserAddressComponent,canActivate:[LoginService]},
  {path:'user-info', component: UserInfoComponent,canActivate:[LoginService]},
  {path:'user-info/:id', component: UserInfoComponent,canActivate:[LoginService]},
  {path:'user-orders/:id', component: UserOrdersComponent,canActivate:[LoginService]},
  {path:'user-profile', component: UserProfileComponent,canActivate:[LoginService]},
  {path:'user-registration', component: UserRegistrationComponent,canActivate:[LoginService]},
  {path:'empty-cart', component: EmptyCartComponent,canActivate:[LoginService]},
  {path:'shopping-cart/:id', component: ShoppingCartComponent,canActivate:[LoginService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
