import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generate } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 
 
  user: any;
  productKey: any;
  Product: any[];
  Address: any[];
  orderId=19051096 ;


  

  constructor(private orderService: OrderService, private loginService: LoginService,
    private activeRouter: ActivatedRoute, private productService: ProductService,
    private userService: UsersService, private router: Router) { }

  

  ngOnInit() {

  
    this.loginService.getCurrentUserDb()
                      .pipe(
                        mergeMap(userDb=>this.userService.getUserByIdAddress(userDb.id).pipe(
                          map(address=>[userDb, address])
                        ))).subscribe(([userDb,address])=>{
                          this.user=userDb;
                          this.Address=[address]
                        })
      
      this.productKey= this.activeRouter.snapshot.params['id'];

      this.productService.getProduct(this.productKey)
                                          .subscribe(products =>{
                                            this.Product= [products]
                                                                   
                                          })
    }

    updateAddress(){
      this.router.navigate(['/user-info', this.productKey]);
    }

    
   async PlaceOrder(){
    let order ={
      dateCreated: new Date().getTime(),
     
      userId: this.user.id,
      address: this.user.address,
      status: 'InProcessing',
      orderId: this.orderId + 1,
      items: this.Product,
      paid: true
    }
    let orderResult:any = await this.orderService.createOrder(order);  
    
    this.router.navigate(['/success-order', orderResult.key]);
    }
    

    Cancle(){
      this.router.navigate(['/']);
    }
    
}
