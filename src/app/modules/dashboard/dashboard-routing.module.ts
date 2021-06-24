import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';


const routes: Routes = [
  { path: '', component: DashComponent },
];
export const DashboardRoutingModule = RouterModule.forChild(routes);

