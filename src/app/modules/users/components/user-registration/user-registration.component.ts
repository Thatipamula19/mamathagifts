import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { userReg } from '../../models/userReg.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  regForm: FormGroup;
  userReg:any;
  user:any;
  Registration:userReg;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private userService: UsersService,private router: Router) { 
    this.regForm = this.fb.group({
      firstname:[null,[Validators.required, Validators.minLength(4)]],
      lastname:[null,[Validators.required, Validators.minLength(4)]],
      gender:['Male',[Validators.required]],
      email:[null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile:[null,[Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit(): void {

    this.loginService.getCurrentUserDb()
                      .subscribe(user=>{
                        this.user=user.id;
                        console.log(user.id)
                      })
  }

  initalizeUser(userReg){
    this.regForm = this.fb.group({
      firstname:[userReg?userReg.firstname:null,[Validators.required, Validators.minLength(4)]],
      lastname:[userReg?userReg.lastname:null,[Validators.required, Validators.minLength(4)]],
      gender:[userReg?userReg.gender:'Male',[Validators.required]],
      email:[userReg?userReg.email:null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile:[userReg?userReg.mobile:null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]]
    })
  }

  addUser(form){
    console.log(form);
    if(this.regForm.valid){
      let userReg: userReg={
        id: this.user?this.user:'',
        firstname: form.firstname,
        lastname: form.lastname,
        gender: form.gender,
        email: form.email,
        mobile: form.mobile,
        

      }
      this.userService.updateUserReg(userReg).then(()=>{
        this.router.navigate(['/user-profile']);
      })
      // if(!this.userReg){
      //   this.userService.userReg(userReg).then(()=>{
      //   // this.router.navigate(['/']);
      //   })
      // }
      // else{
      //   this.userService.updateUserReg(userReg).then(()=>{
      //     // this.router.navigate(['/']);
      //   })
      //}
  }
}

  get firstname(){
    return this.regForm.get('firstname');
  }
  get lastname(){
    return this.regForm.get('lastname');
  }
  get gender(){
    return this.regForm.get('gender');
  }
  get email(){
    return this.regForm.get('email');
  }
  get mobile(){
    return this.regForm.get('mobile');
  }
  
  

  Clear(){
    this.regForm.setValue({
      firstname:'',
      lastname:'',
      gender:'',
      email:'',
      mobile:'',

    })
  }
  Cancle(){
    
      this.router.navigate(['/']);
    
  }

}
