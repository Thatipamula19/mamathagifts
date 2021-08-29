import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { OrderService } from 'src/app/modules/orders/services/order.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';
import { UserInfoComponent } from 'src/app/modules/users/components/user-info/user-info.component';
import { Product } from '../../models/product.model';

import { ProductService } from '../../services/product.service';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productkey;
  Product: any[];
  
  categories: any[];
  sub: Subscription;
  productShoppingCart:any[];

  user: any;
  User: any[];
  userid: any;
  Stock:any[];
  outofstock='Out Of Stock';
  isLoading =false;
 
  
  constructor(private productService: ProductService,private shoppingCartService: ShoppingCartService,
     private activeRouter: ActivatedRoute, private loginService: LoginService,
     private router: Router, private orderService: OrderService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isLoading =true;
    this.productkey= this.activeRouter.snapshot.params['id'];

      this.productService.getProduct(this.productkey)
                          .subscribe(products =>{
                            this.isLoading =false;
                            this.Product= [products];
                          
                          }) 

      this.productService.getProduct(this.productkey)
                          .pipe(
                            mergeMap(products=>this.productService.getProductStock(products.stock).pipe(
                              map(stock=>[products,stock])
                            ))).subscribe(([products,stock])=>{
                              console.log(stock);
                              this.Stock=[stock];
                            })
 /*
      this.shoppingCartService.getListItemsShoppingCart()
                              .subscribe(shoppingCart=>{
                                this.productShoppingCart=shoppingCart;
                                console.log(shoppingCart);
                              })
      
     
      this.productService.getProduct(this.productkey)
                          .pipe(
                            mergeMap(product=>this.shoppingCartService.getListItemsShoppingCart().pipe(
                              map(shoppingCart=>[product,shoppingCart])
                            ))).subscribe(([product,shoppingCart])=>{
                              this.Product=[product];
                              this.productShoppingCart=[shoppingCart];
                            })*/


      this.loginService.getCurrentUserDb()
                        .subscribe(user=>{
                          this.user=user;
                          this.User=[user];
                        });
  
                        this.loginService.getCurrentUser()
                        .pipe(
                          switchMap(user=>{
                            console.log(user);
                            if(!user) return 'e';
                            return this.loginService.getCurrentUserDb();
                          }),
                         map(userDb=>{
                           return [userDb]
                         })
                        )
                        .subscribe(([userdb]) =>{
                          if(userdb!= 'e') 
                          {
                            
                            this.user=userdb
                          }
                          else
                          this.user=null;
                        }, errur=> console.log ); 
  }


  AddToCart(Product,id){
   console.log(Product,id)
    this.shoppingCartService.AddToCart(id,Product);
  }
  NotUser(){
    if(!this.user){
      this.dialog.open(LoginComponent); 
    }
  }

  async BuyNow(){
    if(!this.user){
      this.dialog.open(LoginComponent); 
    }
    
    else if(!this.user.address)
    {
      this.router.navigate(['/user-info', this.productkey ])
      
    }
    else
    {
      this.router.navigate(['/orders', this.productkey ])
    }
    
 
  }
  existProductInShoppingCart(key):boolean
  {
   return this.productShoppingCart.find((product:any)=>product.key==key) 
  }

  existProductStock(key):boolean
  {
   return this.Stock.find((stock:any)=>stock.key==key) 
  }
 
  login(){
  }
    
    
}
