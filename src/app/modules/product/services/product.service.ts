import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


productList : AngularFireList<any>
  constructor(private db: AngularFireDatabase, private activeRouter: ActivatedRoute) { }

  getAllProducts(){
  return  this.db.list('products').snapshotChanges()
                            .pipe(
                              map(changes=>
                                changes.map(c => (
                                  {
                                    key: c.payload.key, ...c.payload.exportVal()
                                  }
                                ))
                            ))
      }
      

      
      getProduct(key){
        return this.db.object('/products/'+key)
        .snapshotChanges()
        .pipe(
          map(c => (
              {
                key: c.payload.key, ...c.payload.exportVal()
              }
            ))
        )
      }

       getProductStock( stock){
        return this.db.object('/products/'+stock)
        .snapshotChanges()
        .pipe(
          map(c => (
              {
                key: c.payload.key, ...c.payload.exportVal()
              }
            ))
        )
            }
     
           
        

      AddProduct(product:Product)
      {
        return this.db.list('/products/').push({
         title:product.title,
         description:product.description,
         pdtdimensions:product.pdtdimensions,
         stock:product.stock,
         categorie:product.categorie,
         price:product.price,
         urlImage1: product.urlImage1,
         urlImage2: product.urlImage2,
         urlImage3: product.urlImage3,
         urlImage4: product.urlImage4,
         urlImage5: product.urlImage5,
         bullet1: product.bullet1,
         bullet2: product.bullet2,
         bullet3: product.bullet3,
         bullet4: product.bullet4
        })
      }

    
  getProductById(uid:string){
  return  this.db.object('/products/'+uid)
            .snapshotChanges()
            .pipe(
              map(product=>{
                let obj:any=product.payload.val();
                let productTemp:Product={
                  id: product.key,
                  title: obj.title,
                  description: obj.description,
                  pdtdimensions: obj.pdtdimensions,
                  stock: obj.stock,
                  price: obj.price,
                  categorie: obj.categorie,
                  urlImage1: obj.urlImage1,
                  urlImage2: obj.urlImage2,
                  urlImage3: obj.urlImage3,
                  urlImage4: obj.urlImage4,
                  urlImage5: obj.urlImage5,
                  bullet1: obj.bullet1,
                  bullet2: obj.bullet2,
                  bullet3: obj.bullet3,
                  bullet4: obj.bullet4,
         
                }
                return productTemp
              })
            )

  }

  updateProduct(product:Product, id){
  return  this.db.object('/products/'+id).update({
      title: product.title,
      description: product.description,
      pdtdimensions:product.pdtdimensions,
      stock:product.stock,
      price: product.price,
      categorie: product.categorie,
      urlImage1: product.urlImage1,
      urlImage2: product.urlImage2,
      urlImage3: product.urlImage3,
      urlImage4: product.urlImage4,
      urlImage5: product.urlImage5,
      bullet1: product.bullet1,
      bullet2: product.bullet2,
      bullet3: product.bullet3,
      bullet4: product.bullet4
    })
  }

  updatStock(keys,stock){
 this.db.list('/products/').update(keys,{inventory: stock })
  }

  deleteProduct(id:string){
    this.db.object('/products/'+id).remove();
  }


}
