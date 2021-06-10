import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VitoModule} from '../../components/vito/vito.module';
import { PagesRoutingModule } from './pages-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { PagesPricingComponent } from './pages-pricing/pages-pricing.component';
import { PagesPricingOneComponent } from './pages-pricing-one/pages-pricing-one.component';
import { PagesMaintainanceComponent } from './pages-maintainance/pages-maintainance.component';
import { PagesComingsoonComponent } from './pages-comingsoon/pages-comingsoon.component';
import { PagesFaqComponent } from './pages-faq/pages-faq.component';


@NgModule({
  declarations: [TimelineComponent, InvoiceComponent, BlankPageComponent, PagesPricingComponent, PagesPricingOneComponent, PagesMaintainanceComponent, PagesComingsoonComponent, PagesFaqComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    VitoModule
  ],
  exports: [TimelineComponent, InvoiceComponent, BlankPageComponent, PagesPricingComponent, PagesPricingOneComponent, PagesMaintainanceComponent, PagesComingsoonComponent, PagesFaqComponent]
})
export class PagesModule { }
