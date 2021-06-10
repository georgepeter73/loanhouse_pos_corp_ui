import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorrisChartComponent } from './morris-chart/morris-chart.component';
import { ChartHighComponent } from './chart-high/chart-high.component';
import { ChartAmComponent } from './chart-am/chart-am.component';
import { ChartApexComponent } from './chart-apex/chart-apex.component';


const routes: Routes = [
  {
    path: 'morris-chart',
    component : MorrisChartComponent
  },
  {
    path: 'chart-high',
    component : ChartHighComponent
  },
  {
    path: 'chart-am',
    component : ChartAmComponent
  },
  {
    path: 'chart-apex',
    component : ChartApexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
