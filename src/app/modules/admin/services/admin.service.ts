import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from '../../auth/services/login.service';
import { UsersService } from '../../users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService  {

  constructor(private loginService: LoginService, private userService: UsersService, private router: Router) { }

  canActivate(){
  return  this.loginService.getCurrentUserDb()
                      .pipe(
                        map(user=>{
                          if(!user) return false;
                          if(user.isAdmin) return true;
                          this.router.navigate(['/login']);
                          return false;
                        })
                      )
  }

}
