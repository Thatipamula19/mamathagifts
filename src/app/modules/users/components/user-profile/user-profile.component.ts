import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails: any[];
  userAddress: any[];
  address:number=0;
  user:any;
  constructor(private userService: UsersService, private loginService: LoginService,
    private router: Router ) { }

  ngOnInit() {
    
    this.loginService.getCurrentUserDb()
                      .pipe(
                        mergeMap(userDb=>this.userService.getUserByIdReg(userDb.id).pipe(
                          mergeMap(userDetails=>this.userService.getUserByIdAddress(userDb.id).pipe(
                            map(address=>[userDb,userDetails,address])
                          ))))).subscribe(([userDb,userDetails,address])=>{
                            this.user=userDb;
                            this.userDetails=[userDetails];
                            this.userAddress=[address];
                            console.log(this.userAddress)
                          })

  }

  updateReg(){
    this.router.navigate(['/user-registration'])
  }

  updateAddress(){
    
      this.router.navigate(['/user-info'])
    
  }

  

}
