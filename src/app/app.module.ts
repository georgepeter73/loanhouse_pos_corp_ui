import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {VitoModule} from './components/vito/vito.module';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import {SnackbarModule} from 'ngx-snackbar';
import 'flatpickr/dist/flatpickr.css'; // you may need to adjust the css import depending on your build tool
import { FlatpickrModule } from 'angularx-flatpickr';
import {AngularFireModule} from '@angular/fire';
import {AgGridModule} from 'ag-grid-angular';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {ButtonRendererComponent} from './custom/button-renderer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { I18nModule } from './i18n/i18n.module';
import {LoginComponent} from './login/login.component';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {HomeComponent} from './home/home.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ButtonRendererComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseStorage),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    AppRoutingModule,
    HttpClientModule,
    VitoModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgSelectModule,
    FormsModule,
    EffectsModule.forRoot([]),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule,
    ProgressbarModule.forRoot(),
    NgScrollbarModule,
    SlickCarouselModule,
    NgwWowModule,
    FlatpickrModule.forRoot(),
    SnackbarModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    I18nModule,
    AmplifyUIAngularModule,
    CarouselModule
  ],
  exports: [
    VitoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
