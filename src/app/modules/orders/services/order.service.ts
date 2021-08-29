import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Order } from '../../admin/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private db: AngularFireDatabase) { }

  
  createOrder(order){
    return this.db.list('/orders/').push(order);
   }
 
   
   
   getOrderByUserId(userId)
   {
     return this.db.list('/orders/', ref=>ref.orderByChild('userId').equalTo(userId))
                                             .snapshotChanges()
                                             .pipe(
                                              map(changes=>
                                                changes.map(c => (
                                                  {
                                                    key: c.payload.key, ...c.payload.exportVal()
                                                  }
                                                ))
                                            )
                                             )
   }

   getProductAllOrder(){
    return  this.db.list('orders').snapshotChanges()
    .pipe(
      map(changes=>
        changes.map(c => (
          {
            key: c.payload.key, ...c.payload.exportVal()
          }
        ))
    ))

  }  

  getOrderByKey(key){
  return  this.db.object('/orders/'+key+'/items/')
            .snapshotChanges()
            .pipe(
              map(order=>{
                return order.payload.val();
              })
            )
  }

  getOneOrderByKey(key){
    return  this.db.object('/orders/'+key)
              .snapshotChanges()
              .pipe(
                map(order=>{
                  return order.payload.val();
                })
              )
    }

  AddUpdateOrder(order: Order){
    return this.db.list('/orders/'+order.id).push({
      status: order.status,
      trackingid: order.trackingid,
      courier: order.courier
    })
  }

  updateOrderForm(order: Order){
    return this.db.object('/orders/'+order.id).update({
      status: order.status,
      trackingid: order.trackingid,
      courier: order.courier
    })
  }

   getProductByIdOrder(idOrder){
     return this.db.object('/orders/'+idOrder+'/items/')
                   .snapshotChanges()
                   .pipe(
                     map(products=>{
                       return products.payload.val();
                     })
                   )
 
   }
   getProductByIdAddress(idOrder){
    return this.db.object('/orders/'+idOrder+'/address/')
                  .snapshotChanges()
                  .pipe(
                    map(address=>{
                      return address.payload.val();
                    })
                  )

  }

  
}
