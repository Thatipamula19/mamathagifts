import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private db: AngularFireDatabase) { }

  getStock(){
    return  this.db.list('stock')
                  .snapshotChanges()
                  .pipe(
                    map(change =>change.map(c=>({
                     key: c.payload.key, ...c.payload.exportVal()
                    })))
                  )
    }
}
