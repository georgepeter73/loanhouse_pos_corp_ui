import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankLayoutRoutingModule } from './blank-layout-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    BlankLayoutRoutingModule
  ],
  exports: [IndexComponent]
})
export class BlankLayoutModule { }
