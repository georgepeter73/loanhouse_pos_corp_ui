import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesMapComponent } from './pages-map/pages-map.component';


const routes: Routes = [
  {
    path : 'map',
    component: PagesMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
