import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsShopping: any[];
  user:any;
  userId;
  Product:any;
  allProducts: any[];
  stock: any[];
  instock='In Stock';
  isLoading = false;

  nbrShoppingProduct:number=0;
  displayedColumns: string[] = ['title', 'urlImage', 'price','stock','actions'];
  constructor(private shoppingService: ShoppingCartService, private router: Router,
    private loginService: LoginService,private dialog: MatDialog,
    private activeRouter: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(){
    this.isLoading =true;
    this.productService.getAllProducts()
                        .subscribe(allProducts=>{
                          this.isLoading = false;
                          this.allProducts=allProducts;
                        })
    this.userId = this.activeRouter.snapshot.params['id'];

    this.shoppingService.getListItemsShoppingCartMapProducts(this.userId)
                        .subscribe(products=>{
                          this.productsShopping=products;
                          this.Product=products;
                          console.log(products)
                        })
    
    this.loginService.getCurrentUserDb()
                        .subscribe(user=>this.user=user);
                        this.loginService.getCurrentUser()
                        .pipe(
                          switchMap(user=>{
                            if(!user) return 'e';
                            return this.loginService.getCurrentUserDb();
                          }),
                          mergeMap(userDb=>this.shoppingService.getListItemsShoppingCart(userDb.id).pipe(
                            map(productsShopping=>{
                              return [userDb,productsShopping]
                            })
                          ))
                        )
                        .subscribe(([userDb,productsShopping])=>{
                          if(userDb!='e'){                            
                            this.nbrShoppingProduct=(productsShopping as any[]).length;
                            console.log(this.nbrShoppingProduct)
                            this.user=userDb;
                          } 
                            
                          else
                          this.user=null
                        }, erreur=> console.log);
  }

  getProductsByKey(key){
    
    return this.allProducts.filter(product=>product.key==key);

  }
  
  
  getTotal()
  {
    let total:number=0;
    if(!this.productsShopping) return total;
    this.productsShopping.forEach(product=>{
      total = total+ + product.price;
    })
    return total;
  }

  Delete(row){

    this.shoppingService.deleteProductShoppingCart(this.userId, row.key); 
    
    if(this.nbrShoppingProduct<=0){
      this.router.navigate(['/empty-cart']);
    }
  }
  
  Products(){
    this.router.navigate(['/products']);
  }
 
 
  Details(key){
    this.router.navigate(['/product-details', key]);
  }

  OnNext(){
    if(!this.user){
      this.dialog.open(LoginComponent); 
    }
    if(!this.user.address){
      this.router.navigate(['/user-address']);
    }
    else{
      this.router.navigate(['/cart-orders']);
    }
    
  }

}
