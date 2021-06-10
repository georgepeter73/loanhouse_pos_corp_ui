import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1RoutingModule } from './layout1-routing.module';
import { IndexComponent } from './index/index.component';
import {VitoModule} from '../../components/vito/vito.module';


@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    Layout1RoutingModule,
    VitoModule
  ]
})
export class Layout1Module { }
