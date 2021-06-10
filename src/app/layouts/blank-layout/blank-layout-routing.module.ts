import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PagesMaintainanceComponent } from 'src/app/views/pages/pages-maintainance/pages-maintainance.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../views/pages/pages.module').then(m => m.PagesModule),
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankLayoutRoutingModule { }
