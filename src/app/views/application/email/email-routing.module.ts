import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {EmailComposeComponent} from './email-compose/email-compose.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'compose',
    component: EmailComposeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
