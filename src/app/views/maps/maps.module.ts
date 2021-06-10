import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VitoModule} from '../../components/vito/vito.module';
import { MapsRoutingModule } from './maps-routing.module';
import { PagesMapComponent } from './pages-map/pages-map.component';


@NgModule({
  declarations: [PagesMapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    VitoModule
  ],
  exports: [PagesMapComponent]
})
export class MapsModule { }
