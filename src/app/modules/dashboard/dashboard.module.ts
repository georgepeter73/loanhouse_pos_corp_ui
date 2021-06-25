import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './pages/dash/dash.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NbButtonModule} from "@nebular/theme";



@NgModule({
  declarations: [DashComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NbButtonModule
    ]
})
export class DashboardModule { }
