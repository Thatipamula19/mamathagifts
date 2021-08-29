import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { LoginService } from '../../auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase, private loginService: LoginService) { }

 async AddToCart(cartId,Product){
   
    //let cartId=localStorage.getItem('cartId');
    //let cartId= this.loginService.getCurrentUserDb();
    if(!cartId){
      let cart = await this.db.list('/shoppingCart/').push({
        dateCreated: new Date().getTime()
      });

      //localStorage.setItem('cartId', cart.key!);
      this.AddProductCart(cart.key, Product)
      

    }
    else
    {
      this.AddProductCart(cartId, Product)
    }
    

  }

  AddProductCart(idCart, ProductAdd)
  {
  
    this.db.object('/shoppingCart/'+idCart+'/items/'+ProductAdd.key)
            .snapshotChanges()
            .pipe(
              take(1)
            ).subscribe(
              productCart=>{
                
                if(!productCart.key){
                 
                  this.db.list('/shoppingCart/'+idCart+'/items/').set(ProductAdd.key, {Product: ProductAdd});
                }
                
              }
            )
  }


  getListItemsShoppingCart(cartId){
    //let cartId = localStorage.getItem('cartId');
    return this.db.list('/shoppingCart/'+cartId+'/items/')
                  .snapshotChanges()
                  .pipe(
                    map(products =>
                      products.map( c =>({
                        key: c.payload.key, ...c.payload.exportVal()
                      }))
                  ))

  }

  deleteProductShoppingCart(cartId,id:string){
    //let cartId= localStorage.getItem('cartId');
    return this.db.object('/shoppingCart/'+cartId+'/items/'+id).remove();
  }

  getListItemsShoppingCartMapProducts(cartId)
  {
    //let cartId=localStorage.getItem('cartId');
   return this.db.list('/shoppingCart/'+cartId+'/items/')
            .snapshotChanges()
            .pipe(

              map(products =>
                products.map(c => (
                           { 
                            
                             key: c.payload.key, ...(c.payload.val() as any).Product
                           }
                           ))
            ))

   
  }
  getProductIdByUserId(userId)
   {
     return this.db.list('/shoppingCart/'+userId+'/items/')
                                             .snapshotChanges()
                                             .pipe(
                                               map(idOrders=>{
                                                 return idOrders.map(ids=>{
                                                   return ids.key;
                                                 })
                                               })
                                             )
   }

  clearShoppingCart(cartId){
    //let cartId = localStorage.getItem('cartId');
    this.db.object('/shoppingCart/'+cartId+'/items/').remove();
  }

}
