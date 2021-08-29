import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  userForm: FormGroup;
  
  userid: any;
  Address: any[];
  user: any;
  constructor(private formBulider: FormBuilder, private loginService: LoginService,
    private userService: UsersService, private router: Router,
    private activeRouter: ActivatedRoute) {
      this.userForm= this.formBulider.group({
        fullname: [null, [Validators.required, Validators.minLength(6)]],
        mobile: [null, [Validators.required, Validators.minLength(10)]],
        email:[null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        addressline1: [null, Validators.required],
        addressline2: [null],
        pinCode: [null, [Validators.required,Validators.maxLength(6)]],
        state: [null, Validators.required]
  
      })
     }

  ngOnInit() {
    this.loginService.getCurrentUser()
    .pipe(
      switchMap(user=>{
        console.log(user);
        if(!user) return 'e';
        return this.loginService.getCurrentUserDb();
      }),
     map(userDb=>{
       return [userDb]
     })
    )
    .subscribe(([userdb]) =>{
      if(userdb!= 'e') 
      {
        
        this.user=userdb
      }
      else
      this.user=null;
    }, errur=> console.log );     


    
    
    this.userService.getUserByIdAddress(this.userid)
                    .subscribe(address=>{
                      this.Address=[address];
                      console.log(address)
                    })
  }

  
  initalizeUser(user){
    this.userForm= this.formBulider.group({
      fullname: [user?user.fullname:null, [Validators.required, Validators.minLength(6)]],
      mobile: [user?user.mobile:null, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      email:[user?user.email:null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      addressline1: [user?user.addressline1:null, Validators.required],
      addressline2: [user?user.addressline2:null],
      pinCode: [user?user.pinCode:null,  [Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
      state: [user?user.state:null, Validators.required]

    })

  }

 
  get fullname(){
    return this.userForm.get('fullname');
  }
  get mobile(){
    return this.userForm.get('mobile');
  }
  get email(){
    return this.userForm.get('email');
  }
  get pinCode(){
    return this.userForm.get('pinCode')
  }

  AddUser(form){
    console.log(form);
    if(this.userForm.valid){
      let user: User={
        id: this.user.id,
        fullname: form.fullname,
        mobile: form.mobile,
        email: form.email,
        addressline1: form.addressline1,
        addressline2: form.addressline2,
        pinCode: form.pinCode,
        state: form.state

      }
      if(!this.user){
        this.userService.AddUser(user).then(()=>{
        this.router.navigate(['/cart-orders']);
        })
      }
      else{
        this.userService.updateUser(user).then(()=>{
          this.router.navigate(['/cart-orders']);
        })
      }
      
    }

  }

  Cancle(){
    this.router.navigate(['/']);
  }

}
