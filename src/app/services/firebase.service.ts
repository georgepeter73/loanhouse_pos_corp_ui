import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getUsers(){
    return this.db.collection('users').valueChanges();
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  createUser(user) {
    return this.db.collection('users').add(JSON.parse(JSON.stringify(user)));
  }
}
