import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout2RoutingModule } from './layout2-routing.module';
import { IndexComponent } from './index/index.component';
import {VitoModule} from '../../components/vito/vito.module';


@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    Layout2RoutingModule,
    VitoModule
  ]
})
export class Layout2Module { }
