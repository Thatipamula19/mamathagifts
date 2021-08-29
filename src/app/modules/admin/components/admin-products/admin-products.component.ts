import { RowContext } from '@angular/cdk/table';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/modules/common/services/categories.service';
import { AddProductComponent } from 'src/app/modules/product/components/add-product/add-product.component';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: any[];
  categories: any[]
  searchKey:string;
  sub: Subscription;
  
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: any = [];
  headElements = ['title', 'categorie', 'urlImage', 'price', 'stock','actions'];
  modalRef: MDBModalRef;



  displayedColumns: string[] = ['title','categorie','urlImage','price','stock','actions'];
  constructor(private productService: ProductService,
    private categorieService: CategoriesService, private router: Router,
    private cdRef: ChangeDetectorRef,) { }

  ngOnInit() {

    this.sub=this.categorieService.getAllCategories()
    .pipe(
      mergeMap(categories=>this.productService.getAllProducts().pipe(
        map(products=>[categories,products])
        
      ))).subscribe(([categories,products])=>{
        this.categories=categories;
        this.products=products;
        this.elements=products;
      });


      //Bootstrap Table

      for (let i = 1; i <= 25; i++) {
        this.elements.push({title: i.toString(), categorie: 'categorie ' + i, urlImage: 'urlImage ' + i, price: 'price ' + i, stock: 'stock ' + i, actions: 'actions ' + i});
      }
  
      this.mdbTable.setDataSource(this.elements);
      this.elements = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  
  





  AddProduct(){
   // this.dialog.open(AddProductComponent, { width: "100%"});
   this.router.navigate(['/add-product']);
  }

  Edit(key){
    this.router.navigate(['/add-product', key]);
  }
  Delete(key){
      if(window.confirm('Are you sure to Delete the Product ?')) this.productService.deleteProduct(key);
  }



}
