import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styles: []
})
export class SocialFormComponent implements OnInit {

  socialProviders = [
    {
      type: 'google',
      icon: 'ri-google-line'
    },
    {
      type: 'facebook',
      icon: 'ri-facebook-box-line'
    },
    {
      type: 'twitter',
      icon: 'ri-twitter-line'
    }
  ];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  socialLogin(type) {

    let firebaseProvider = new auth.GoogleAuthProvider();

    if (type === 'facebook') {
      firebaseProvider = new auth.FacebookAuthProvider();
    }

    auth().signInWithPopup(firebaseProvider)
      .then(user => {
        console.log(user.user.providerData[0]);
        console.log(user.user.providerData[0].email);
      }).catch();
  }
}
