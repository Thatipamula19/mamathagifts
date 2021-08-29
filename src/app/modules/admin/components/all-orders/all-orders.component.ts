import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/modules/orders/services/order.service';


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  

  Orders: any[];
  noOrders:number=0;
  displayedColumns : String[] = ['dateCreated','key','status','trackingid','actions'];
  sub:Subscription;

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective

  elements: any = [];
  previous: any = [];
  headElements = ['dateCreated', 'key', 'status', 'trackingid', 'actions'];
  constructor(private orderService: OrderService, private router: Router, private cdRef: ChangeDetectorRef
    ) { }
 
  ngOnInit() {

    this.orderService.getProductAllOrder()
                     .subscribe(orders=>{
                       this.elements= orders;
                       this.Orders=orders;
                       this.noOrders=(orders as any[]).length;
                      });
                     for (let i = 1; i <= 15; i++) {
                      this.elements.push({ id: i.toString(), dateCreadted: 'dateCreadted ' + i, key: 'key ' + i, status: 'status ' + i, trackingid: 'trackingid ' + i, actions: 'actions'  + i});
                    }
                    this.mdbTable.setDataSource(this.elements);
                    this.elements = this.mdbTable.getDataSource();
                    this.previous = this.mdbTable.getDataSource();                        
                      
  }


  UpdateOrder(key){
    this.router.navigate(['/order-details', key])

  }
  
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  

  


  
}
