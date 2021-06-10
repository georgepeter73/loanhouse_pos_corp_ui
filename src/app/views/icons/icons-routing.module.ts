import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconDripiconsComponent } from './icon-dripicons/icon-dripicons.component';
import { IconsFontawesomeComponent } from './icons-fontawesome/icons-fontawesome.component';
import { IconsLineawesomeComponent } from './icons-lineawesome/icons-lineawesome.component';
import { IconsRemixiconComponent } from './icons-remixicon/icons-remixicon.component';
import { IconsUniconsComponent } from './icons-unicons/icons-unicons.component';


const routes: Routes = [
  {
    path: 'icon-dripicons',
    component: IconDripiconsComponent
  },
  {
    path: 'icon-fontawesome',
    component: IconsFontawesomeComponent
  },
  {
    path: 'icon-lineawesome',
    component: IconsLineawesomeComponent
  },
  {
    path: 'icon-remixicon',
    component: IconsRemixiconComponent
  },
  {
    path: 'icon-unicons',
    component: IconsUniconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
