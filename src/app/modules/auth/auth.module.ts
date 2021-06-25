import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "@modules/auth/pages/login/login.component";
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AmplifyUIAngularModule
  ]
})
export class AuthModule { }
