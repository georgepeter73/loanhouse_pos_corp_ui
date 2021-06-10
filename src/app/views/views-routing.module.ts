import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Dashboard1Component} from './dashboards/dashboard1/dashboard1.component';
import {Dashboard2Component} from './dashboards/dashboard2/dashboard2.component';

import { CalendarComponent } from './application/calendar/calendar.component';
// import {CoreModule} from './core/core.module';
import { ProjectManagementComponent } from './application/project-management/project-management.component';
import {SocialAppComponent} from './application/Social/social-app/social-app.component';
import {TodoListingComponent} from './application/todo/todo-listing/todo-listing.component';

const routes: Routes = [
  {
    path: '',
    component: Dashboard1Component
  },
  {
    path: 'home-2',
    component: Dashboard2Component
  },
  {
    path: 'app/calendar',
    component: CalendarComponent
  },
  {
    path: 'core',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/core/core.module').then(m => m.CoreModule),
      }
    ]
  },
  {
    path: 'app/social-app',
    component: SocialAppComponent
  },
  {
    path: 'app/todo',
    component: TodoListingComponent
  },
  {
    path: 'app/project-management',
    component: ProjectManagementComponent
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/forms/forms.module').then(m => m.FormsModule),
      }
    ]
  },
  {
    path: 'table',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/table/table.module').then(m => m.TableModule),
      }
    ]
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/application/user/user.module').then(m => m.UserModule),
      }
    ]
  },
  {
    path: 'charts',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/charts/charts.module').then(m => m.ChartsModule),
      }
    ]
  },
  {
    path: 'icons',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/icons/icons.module').then(m => m.IconsModule),
      }
    ]
  },
  {
    path: 'extra-pages',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },
  {
    path: 'maps',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/maps/maps.module').then(m => m.MapsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
