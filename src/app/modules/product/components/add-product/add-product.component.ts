import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { finalize, map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/modules/common/services/categories.service';
import { StockService } from 'src/app/modules/common/services/stock.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  

  uploadPercent1: Observable<any>;
  uploadPercent2: Observable<any>;
  uploadPercent3: Observable<any>;
  uploadPercent4: Observable<any>;
  uploadPercent5: Observable<any>;
  downloadURL: Observable<string>;

  AllProducts: any[];
  productKey:string;

  pdtAddForm: FormGroup;
  categories: any[];
  product:Product;
  stock: any[];

  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;

  idProduct: any;

  constructor(private fb: FormBuilder, private categorieService: CategoriesService,
    private productService: ProductService, private activeRouter: ActivatedRoute,
    private storage: AngularFireStorage, private router : Router,
    private stockService: StockService ) { 

      this.pdtAddForm = this.fb.group({
        'title': [null, Validators.required],
        'description': [null, Validators.required],
        'pdtdimensions': [null, Validators.required],
        'stock': [null, Validators.required],
        'price': [null, Validators.required],
        'categorie': [null, Validators.required],
        'urlImage1': [null, Validators.required],
        'urlImage2': [null ], 'urlImage3': [null ],'urlImage4': [null ], 'urlImage5': [null ],
        'bullet1':[null],'bullet2':[null],'bullet3':[null],'bullet4':[null]
      })  

  }

  ngOnInit() {


this.idProduct= this.activeRouter.snapshot.params['id'];

    
    if(!this.idProduct){
      this.categorieService.getAllCategories()
      .subscribe(categorie=>{
            this.categories=categorie;
            console.log(categorie);
            this.initalizeProduct(null);
      })
    }
    else
    {
      this.categorieService.getAllCategories()
                            .pipe(
                              mergeMap(categories=> this.productService.getProductById(this.idProduct).pipe(
                                map(product=>{
                                  return ([categories,product])
                                })
                              ))).subscribe(([categories,product])=>{
                                this.categories=categories as any[];
                                this.product=product as Product;
                                this.AllProducts=[product];
                                this.initalizeProduct(product);

                              })
    }

    this.stockService.getStock()
                      .subscribe(stock=>this.stock=stock);
    
    
    
   
    
  }


  initalizeProduct(product){
    this.pdtAddForm = this.fb.group({
      'title': [product?product.title:null, Validators.required],
      'description': [product?product.description:null, Validators.required],
      'pdtdimensions': [product?product.pdtdimensions:null, Validators.required],
      'stock': [product?product.stock:null, Validators.required],
      'price': [product?product.price:null, Validators.required],
      'categorie': [product?product.categorie:null, Validators.required],
      'urlImage1': [product?product.urlImage1:null, Validators.required],
      'urlImage2': [product?product.urlImage2:null ],
      'urlImage3': [product?product.urlImage3:null ],
      'urlImage4': [product?product.urlImage4:null ],
      'urlImage5': [product?product.urlImage5:null ],
      'bullet1':[product?product.bullet1:null],
      'bullet2':[product?product.bullet2:null],
      'bullet3':[product?product.bullet3:null],
      'bullet4':[product?product.bullet4:null]
    })
  }

  

  AddProduct(form){
    console.log(form);
    if(this.pdtAddForm.valid){
     let product: Product={
       id: this.idProduct?this.idProduct.id:'',
       title: form.title,
       description: form.description,
       pdtdimensions: form.pdtdimensions,
       stock: form.stock,
       price: form.price,
       categorie: form.categorie,
       urlImage1 : form.urlImage1,
       urlImage2 : form.urlImage2,
       urlImage3 : form.urlImage3,
       urlImage4 : form.urlImage4,
       urlImage5 : form.urlImage5,
       bullet1: form.bullet1,
       bullet2: form.bullet2,
       bullet3: form.bullet3,
       bullet4: form.bullet4,
      
     }
     if(!this.idProduct){
       console.log(this.idProduct)
      this.productService.AddProduct(product).then(()=>{
        this.router.navigate(['/admin-products']);
      })
     }
     else{
      this.productService.updateProduct(product, this.idProduct).then(()=>{
        this.router.navigate(['/admin-products']);
      })
     }
    
    }
  }

  onClear(){
    this.pdtAddForm.setValue({
      title: '',
      description: '',
      categorie: '',
      price: '',
      urlImage1: '',
      urlImage2: '',
      urlImage3: '',
      urlImage4: '',
      urlImage5: '',
      bullet1: '',
      bullet2: '',
      bullet3:'',
      bullet4: '',
    })
  }

  //Image 1
  uploadFile1(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent1 = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{fileRef.getDownloadURL()
                      .subscribe((url)=>{
                        this.image1=url;
                      })
        }  )
     )
    .subscribe()
  }

  //Image 2
  uploadFile2(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent2 = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{fileRef.getDownloadURL()
                      .subscribe((url)=>{
                        this.image2=url;
                      })
        }  )
     )
    .subscribe()
  }

  //Image 3
  uploadFile3(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent3 = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{fileRef.getDownloadURL()
                      .subscribe((url)=>{
                        this.image3=url;
                      })
        }  )
     )
    .subscribe()
  }

  //Image 4
  uploadFile4(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent4 = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{fileRef.getDownloadURL()
                      .subscribe((url)=>{
                        this.image4=url;
                      })
        }  )
     )
    .subscribe()
  }

  //Image 5
  uploadFile5(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent5 = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{fileRef.getDownloadURL()
                      .subscribe((url)=>{
                        this.image5=url;
                      })
        }  )
     )
    .subscribe()
  }



}
