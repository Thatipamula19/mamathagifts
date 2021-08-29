import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-sucess-order',
  templateUrl: './sucess-order.component.html',
  styleUrls: ['./sucess-order.component.css']
})
export class SucessOrderComponent implements OnInit {

  orderId;
  sucessorder: any;
  
  constructor(private activeRouter: ActivatedRoute, private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.orderId = this.activeRouter.snapshot.params['id'];

    this.orderService.getProductByIdOrder(this.orderId)
                      .subscribe(order=>{
                        this.sucessorder= order
                      });
  }
  Products(){
    this.router.navigate(['/products']);
  }

}
