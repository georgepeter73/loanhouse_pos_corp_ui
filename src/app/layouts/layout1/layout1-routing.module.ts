import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../views/views.module').then(m => m.ViewsModule),
      },
      {
        path: 'email',
        loadChildren: () => import('../../views/application/email/email.module').then(m => m.EmailModule),
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout1RoutingModule { }
