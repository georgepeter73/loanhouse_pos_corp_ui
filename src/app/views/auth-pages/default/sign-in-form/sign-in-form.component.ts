import {Component, Input, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {SnackbarService} from 'ngx-snackbar';
import {Router} from '@angular/router';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styles: []
})
export class SignInFormComponent implements OnInit {

  user: User = {};
  @Input() authType: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AngularFireAuth, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit() {
    this.user = new User({email: 'admin@vito.com', password: 'admin123'});
  }

  onSubmit(signInForm) {
    if (this.authType === 'jwt') {
      this.jwtLogin(signInForm.form.value);
    } else if (this.authType === 'firebase') {
      this.firebaseLogin(signInForm.form.value);
    }
  }


  jwtLogin(formData) {

    this.snackbarService.add({msg: 'You have successfully logged in.',
      timeout: 5000,
      action: {text: 'close', color: '#ffffff'}});

    this.router.navigateByUrl('/home-1');
  }

  firebaseLogin(formData) {
    auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then((user) => {

        this.snackbarService.add({msg: 'You have successfully logged in.',
          timeout: 5000,
          action: {text: 'close', color: '#ffffff'}});

        this.router.navigateByUrl('/home-1');
    }).catch((err) => {
      let error = err.message;
      if (err.code === 'auth/user-not-found') {
        error = 'These credentials do not match our records.';
      }

      this.snackbarService.add({msg: error,
        background: '#b21f2d', timeout: 5000,
        action: {text: 'close', color: '#ffffff'}});
    });
  }

}
