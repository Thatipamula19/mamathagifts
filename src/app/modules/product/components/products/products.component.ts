import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { CategoriesService } from 'src/app/modules/common/services/categories.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: any[]
  products: any[]
  product: any;
  productsShoppingCart: any[];
  sub: Subscription;
  user: any;
  isLoading = false;


  constructor(private productService: ProductService, private categorieService: CategoriesService,
    private shoopingCartService: ShoppingCartService, private router: Router, private db: AngularFireDatabase,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.sub = this.categorieService.getAllCategories()
      .pipe(
        mergeMap(categories => this.productService.getAllProducts().pipe(
          map(products => [categories, products])

        ))).subscribe(([categories, products]) => {
          this.isLoading = false;
          this.categories = categories;
          this.products = products;
        });




  }

  getProductsByCategorie(key) {
    return this.products.filter(product => product.categorie == key);

  }


  /*
    AddToCart(pdt){
      console.log(pdt)
     this.shoopingCartService.AddToCart(pdt);
    }*/


  Details(key) {

    this.router.navigate(['/product-details', key], { relativeTo: this.activatedRoute });
  }

}
