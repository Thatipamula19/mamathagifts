import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { OrderService } from 'src/app/modules/orders/services/order.service';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
   @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: any = [];
  headElements = ['Order Date', 'OrderId', 'status', 'trackingid', 'courier','actions'];
  modalRef: MDBModalRef;
 
  
  userid: any;
  orderIds: any[];
  Orders:number=0;
  userOrder: any;  
  userAddress:any[];
  isLoading = false;

  today= Date.now()

  displayedColumns : String[] = ['dateCreated','key','status','trackingid','courier','actions'];
  constructor( private orderService: OrderService, private activateRouter: ActivatedRoute,
    private cdRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    //userid
    this.isLoading = true;
    this.userid = this.activateRouter.snapshot.params['id'];

    this.orderService.getOrderByUserId(this.userid)
                      .subscribe(orderid=>{
                        console.log(orderid);
                        this.isLoading = false;
                        this.orderIds=(orderid) ;
                        this.Orders=(orderid as any[]).length;
                        console.log(this.Orders)
                        this.elements=orderid;
                      })
  for (let i = 1; i <= 25; i++) {
        this.elements.push({dateCreated: i.toString(), key: 'key' + i, status: 'status ' + i, trackingid: 'trackingid ' + i, courier: 'courier ' + i, actions: 'actions ' + i});
      }
  
      this.mdbTable.setDataSource(this.elements);
      this.elements = this.mdbTable.getDataSource();  
  }

  orderDetail(key){
    this.orderService.getProductByIdOrder(key)
                      .pipe(
                        mergeMap(order=>this.orderService.getProductByIdAddress(key).pipe(
                          map(address=>[order,address])
                          ))).subscribe(([order,address])=>{
                            this.userOrder= order;
                            this.userAddress=[address];
                            console.log(order);
                            console.log(address)
                          })
  }
  Products(){
    this.router.navigate(['/products']);
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  

}
