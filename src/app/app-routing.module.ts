import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from '@auth/auth.guard';
import { DashboardLayoutComponent } from '@layouts/dashboard/dashboard-layout/dashboard-layout.component';
import {AuthLayoutComponent} from "@layouts/auth/auth-layout/auth-layout.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:  [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      }
    ]
  },
  {
    path: 'login1',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/auth/auth.module').then(
            m => m.AuthModule
          )
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
