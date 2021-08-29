import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFireDatabase) { }

  getAllCategories(){
    return  this.db.list('categorie')
                  .snapshotChanges()
                  .pipe(
                    map(change =>change.map(c=>({
                     key: c.payload.key, ...c.payload.exportVal()
                    })))
                  )
    }
}
