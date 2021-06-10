import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './default/sign-in/sign-in.component';
import {SignUpComponent} from './default/sign-up/sign-up.component';
import {LockScreenComponent} from './default/lock-screen/lock-screen.component';
import {PasswordResetComponent} from './default/password-reset/password-reset.component';
import {ConfirmMailComponent} from './default/confirm-mail/confirm-mail.component';


const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  {
    path: 'confirm-mail',
    component: ConfirmMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule { }
