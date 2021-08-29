import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';
import { OrderService } from '../../services/order.service';
import * as uuid from 'uuid';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.css']
})
export class CartOrdersComponent implements OnInit {

  productsOrder:any[];
  displayedColumns: string[] = ['title','urlImage','price'];
  user:any;
  userid: any[];
  Address:any[];
 allProducts:any[];
 Stock: number=0;
 productKey:any;
 isLoading = false;
  constructor(private shoppingCartService: ShoppingCartService, private loginService: LoginService,
    private orderService: OrderService, private router: Router,private userService: UsersService,
    private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getAllProducts()
                        .subscribe(
                          product=>{
                            this.isLoading =false;
                            console.log(product);
                            this.allProducts=product;
                          }
                        )
    /*
    this.shoppingCartService.getListItemsShoppingCartMapProducts(this.user)
                            .subscribe(orders=>{
                              this.productsOrder=orders;
                              console.log(orders)
                            })
    this.loginService.getCurrentUserDb()
                      .subscribe(user=>{
                        this.user=user;
                        this.userid=[user];
                        console.log(user)
                      })*/

              
    this.loginService.getCurrentUserDb()
                      .pipe(
                        mergeMap(userDb=>this.shoppingCartService.getListItemsShoppingCartMapProducts(userDb.id).pipe(
                          mergeMap(products=>this.userService.getUserByIdAddress(userDb.id).pipe(
                            map(address=>[userDb,products,address])
                          ))                         
                        ))).subscribe(([userDb,products,address])=>{
                          this.userid=[userDb];
                          this.user=userDb;
                          this.productsOrder=products;
                          this.Address=[address];
                        })
    
    
  }
  getTotal()
  {
    let total:number=0;
    if(!this.productsOrder) return total;
    this.productsOrder.forEach(Product=>{
      total=total+ + Product.price
    })
    return total;
  }
  getProduct(key){
    return this.allProducts.filter(product=>product.key==key);
    
  }
// stock(){
//   let total:number=0;
//     if(!this.allProducts) return total;
//     this.allProducts.forEach(Product=>{
//       total=total+ + Product.price
//     })
//     return total;
// }

  getStock(key,inventory){
    this.productKey = key;
    console.log(this.productKey)
    this.Stock = inventory - 1;
   
  }
 

  userAddress(id){
    this.userService.getUserByIdAddress(id)
                    .subscribe(address=>{
                      this.Address=[address];
                      console.log(address);
                    })
  }
  updateAddress(){
    this.router.navigate(['/user-address']);
  }

  // OrderId() {
  //   // Math.random should be unique because of its seeding algorithm.
  //   // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  //   // after the decimal.
  //   return '_' + Math.random().toString(36).substr(9);
  // };

  OnCancel()
  {
    this.router.navigate(['/products']);

  }
  async placeOrder()
  {
    //Create the order
    let order={
      dateCreated:new Date().getTime(),
      userId:this.user.id,
      address:this.user.address,
      status: 'InProcessing',
      items:this.productsOrder,
      total:this.getTotal(),
      paid:true
    }
   let orderResult:any= await this.orderService.createOrder(order);
   this.productService.updatStock(this.productKey, this.Stock);
    this.shoppingCartService.clearShoppingCart(this.user.id);
    
    this.router.navigate(['/success-order',orderResult.key]);
   //Clear the shopping Cart

   //let resultPayment =this.paymentService.payment(orderResult.key,this.getTotal());
   //if(resultPayment)
   //{
     //Update the order with paid=true
   //}
  // else
  // {
     //Update the order with paid=false 
  // }


  }

}
