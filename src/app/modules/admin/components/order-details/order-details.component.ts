import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { OrderService } from 'src/app/modules/orders/services/order.service';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderKey:string;

  // Details show order
  Order: any;
  orderUser: any[];
  OneOrder: any[];

  user: any;
  userAddress: any[];

  // form Order
  order: Order;

  updateOrderForm: FormGroup

  constructor(private activeRouter: ActivatedRoute, private orderService: OrderService,
    private fb: FormBuilder, private router: Router, private loginService: LoginService,
    private userService: UsersService) {
      this.updateOrderForm = this.fb.group({
        status: ['In Processing'],
        trackingid: [null],
        courier: [null]
      })
     }

  ngOnInit() {

    this.orderKey = this.activeRouter.snapshot.params['id'];

    this.orderService.getOrderByKey(this.orderKey)
                      .subscribe(order=>{
                        this.Order=order
                      });
    this.orderService.getOneOrderByKey(this.orderKey)
                      .subscribe(oneorder=>{
                        this.OneOrder=[oneorder] as Order[];
                      })
    this.orderService.getProductByIdAddress(this.orderKey)
                      .subscribe(address=>{
                        this.userAddress=[address];
                      })
     
    
    
                    
  }

  initalizeOrder(order){
    this.updateOrderForm = this.fb.group({
      status: ['In Processing'],
      trackingid: [null],
      courier: [null]
    })
  }

  AddUpdateOrder(form){
    console.log(form)
    if(this.updateOrderForm.valid){
      let order: Order={
        id: this.orderKey?this.orderKey:'',
        status: form.status,
        trackingid: form.trackingid,
        courier: form.courier

    }
    if(!this.orderKey){
      this.orderService.AddUpdateOrder(order);
    }
    else{
      this.orderService.updateOrderForm(order);
    }
    this.router.navigate(['/all-orders'])
      
    }
  }
  

  

  onClear(){

  }

}
