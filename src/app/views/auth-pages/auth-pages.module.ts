import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import {SignInComponent} from './default/sign-in/sign-in.component';
import { SignUpComponent } from './default/sign-up/sign-up.component';
import { LockScreenComponent } from './default/lock-screen/lock-screen.component';
import { PasswordResetComponent } from './default/password-reset/password-reset.component';
import { ConfirmMailComponent } from './default/confirm-mail/confirm-mail.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { SignInFormComponent } from './default/sign-in-form/sign-in-form.component';
import { SocialFormComponent } from './default/social-form/social-form.component';
import { SignUpFormComponent } from './default/sign-up-form/sign-up-form.component';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LockScreenComponent,
    PasswordResetComponent,
    ConfirmMailComponent,
    SignInFormComponent,
    SocialFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthPagesRoutingModule,
    TabsModule,
    AmplifyUIAngularModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    LockScreenComponent,
    PasswordResetComponent,
    ConfirmMailComponent,
    SignInFormComponent,
    SocialFormComponent,
    SignUpFormComponent
  ]
})
export class AuthPagesModule { }
