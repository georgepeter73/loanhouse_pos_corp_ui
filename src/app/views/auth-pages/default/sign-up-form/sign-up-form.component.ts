import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {User} from '../../../../models/user';
import {SnackbarService} from 'ngx-snackbar';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styles: []
})
export class SignUpFormComponent implements OnInit {

  user = { name: '', email: '', password: ''};
  @Input() authType: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AngularFireAuth, private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit() {
  }

  onSubmit(signInForm) {

    console.log(this.authType, signInForm, this.user);
    if (this.authType === 'jwt') {
      this.jwtLogin(signInForm.form.value);
    } else if (this.authType === 'firebase') {
      this.firebaseLogin(signInForm.form.value);
    }
  }


  jwtLogin(formData) {
    console.log('jwt', formData);

    this.snackbarService.add({msg: 'You have successfully registered.',
      timeout: 5000,
      action: {text: 'close', color: '#ffffff'}});

    this.router.navigateByUrl('/auth/sign-in');
  }

  firebaseLogin(formData) {
    auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then((user) => {

        this.snackbarService.add({msg: 'You have successfully registered.',
          timeout: 5000,
          action: {text: 'close', color: '#ffffff'}});

        this.router.navigateByUrl('/auth/sign-in');
      }).catch((err) => {
        this.snackbarService.add({msg: err.message,
          background: '#b21f2d', timeout: 5000,
          action: {text: 'close', color: '#ffffff'}});
    });
  }

}
