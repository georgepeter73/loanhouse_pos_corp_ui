import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './pages/dash/dash.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
