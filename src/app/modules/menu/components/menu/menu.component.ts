import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:any;
  nbrShoppingProduct:number=0;
  constructor(private loginService: LoginService, private shoppingCartService: ShoppingCartService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.loginService.getCurrentUser()
                      .pipe(
                        switchMap(user=>{
                          if(!user) return 'e';
                          return this.loginService.getCurrentUserDb();
                        }),
                        mergeMap(userDb=>this.shoppingCartService.getListItemsShoppingCart(userDb.id).pipe(
                          map(productsShopping=>{
                            return [userDb,productsShopping]
                          })
                        ))
                      )
                      .subscribe(([userDb,productsShopping])=>{
                        if(userDb!='e'){
                          this.nbrShoppingProduct=(productsShopping as any[]).length;
                          this.user=userDb;
                        } 
                          
                        else
                        this.user=null
                      }, erreur=> console.log);
  }
  login(){
    this.dialog.open(LoginComponent);
  }


  logout(){
    this.loginService.logoutWithGoogle().then(()=>{
      this.router.navigate(['/']);
    })    
  }


  Orders(){
    this.router.navigate(['/user-orders', this.user.id]);
  }

  recapShopping(){
    if(!this.user){
      this.dialog.open(LoginComponent); 
    }
  //  else if(this.nbrShoppingProduct<=0){
  //   this.router.navigate(['/empty-cart']);
  //  }
    else{
      this.router.navigate(['/shopping-cart', this.user.id]);
    }
  }
  MyProfile(){
    if(!this.user.registration){
      this.router.navigate(['/user-registration']);
    }
    else{
      this.router.navigate(['/user-profile']);
    }
  }

}
