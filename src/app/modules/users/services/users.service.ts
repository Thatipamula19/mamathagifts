import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { userReg } from '../models/userReg.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(user){
    if(!user) return;
    this.db.object('/user/'+user.uid).update({
      name: user.displayName,
      email: user.email
    })

  }
  getUserById(uid:string){
  return  this.db.object('/user/'+uid)
            .snapshotChanges()
            .pipe(
              map(user=>{
                let objectUser:any = user.payload.val();
                objectUser.id=user.payload.key;
                return objectUser
              })
            )
  }

  getUserByIdAddress(uid:string){
    return  this.db.object('/user/'+uid+'/address/')
                  .snapshotChanges()
                  .pipe(
                    map(user=>{
                      return user.payload.val();
                    })
       
                    )
    }

    getUserByIdReg(uid:string){
      return  this.db.object('/user/'+uid+'/registration/')
                    .snapshotChanges()
                    .pipe(
                      map(user=>{
                        return user.payload.val();
                      })
         
                      )
      }

    

      


  AddUser(user: User){
    return this.db.list('user').push({
      fullname: user.fullname,
      mobile: user.mobile,
      email: user.email,
      addressline1: user.addressline1,
      addressline2: user.addressline2,
      pinCode: user.pinCode,
      state: user.state,
    })
  }


  updateUser(user: User){
    return this.db.object('/user/'+user.id+'/address/').update({
      fullname: user.fullname,
      mobile: user.mobile,
      email: user.email,
      addressline1: user.addressline1,
      addressline2: user.addressline2,
      pinCode: user.pinCode,
      state: user.state,
    })

  }

  userReg(userReg: userReg){
    return this.db.list('/user/'+userReg.id+'/registration/').push({
      firstname: userReg.firstname,
      lastname: userReg.lastname,
      gender: userReg.gender,
      email: userReg.email,
      mobile: userReg.mobile,
      
    })
  }

  updateUserReg(userReg: userReg){
    return this.db.object('/user/'+userReg.id+'/registration/').update({
      firstname: userReg.firstname,
      lastname: userReg.lastname,
      gender: userReg.gender,
      email: userReg.email,
      mobile: userReg.mobile,
      
    })

  }
  
  
 

}
