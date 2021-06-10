import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { PagesPricingComponent } from './pages-pricing/pages-pricing.component';
import { PagesPricingOneComponent } from './pages-pricing-one/pages-pricing-one.component';
import { PagesMaintainanceComponent } from './pages-maintainance/pages-maintainance.component';
import { PagesComingsoonComponent } from './pages-comingsoon/pages-comingsoon.component';
import { PagesFaqComponent } from './pages-faq/pages-faq.component';


const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'blank-page',
    component: BlankPageComponent
  },
  {
    path: 'pricing',
    component: PagesPricingComponent
  },
  {
    path: 'pricing-one',
    component: PagesPricingOneComponent
  },
  {
    path: 'maintainance',
    component: PagesMaintainanceComponent
  },
  {
    path: 'comingsoon',
    component: PagesComingsoonComponent
  },
  {
    path: 'faq',
    component: PagesFaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
