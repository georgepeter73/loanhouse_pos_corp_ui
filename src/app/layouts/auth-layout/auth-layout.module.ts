import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { IndexComponent } from './index/index.component';
import {VitoModule} from '../../components/vito/vito.module';
import {CarouselModule} from 'ngx-owl-carousel-o';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    VitoModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  exports: [IndexComponent]
})
export class AuthLayoutModule { }
