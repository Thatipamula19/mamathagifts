import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import  firebase from 'firebase/app';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../../users/services/users.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  user: firebase.User | null;
  constructor(private login: AngularFireAuth, private router: Router, private userService: UsersService) { 
    this.login.authState
              .subscribe(
                user=>{
                  this.userService.saveUser(user);
                }
              )
  }

  loginWithGoogle(){
    return this.login.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }
  logoutWithGoogle(){
    return this.login.signOut();
  }

  getCurrentUser(){
  return  this.login.authState;
  }
  canActivate(): Observable<boolean>{
  return  this.login.authState
              .pipe(
                map(user=>{
                  if(user) return true;
                  else
                  this.router.navigate(['/login']);
                  return false;
                })
              )
  }
  getCurrentUserDb(){
  return  this.login.authState
                      .pipe(
                        switchMap(user =>{
                          return  this.userService.getUserById(user!.uid)
                        }),
                        map(user=>{
                          return user;
                        })
                      )
  }

}
