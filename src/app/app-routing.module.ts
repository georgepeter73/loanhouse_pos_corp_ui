import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./layouts/layout1/layout1.module').then(m => m.Layout1Module) },
  { path: 'home-1', loadChildren: () => import('./layouts/layout2/layout2.module').then(m => m.Layout2Module) },
  { path: 'page', loadChildren: () => import('./layouts/blank-layout/blank-layout.module').then(m => m.BlankLayoutModule) },
  { path: 'auth', loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
