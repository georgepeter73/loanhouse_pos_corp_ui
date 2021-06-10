import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VitoModule} from '../../components/vito/vito.module';
import { TableRoutingModule } from './table-routing.module';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableEditableComponent } from './table-editable/table-editable.component';


@NgModule({
  declarations: [TableBasicComponent, DataTableComponent, TableEditableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    VitoModule
  ],
  exports: [TableBasicComponent, DataTableComponent, TableEditableComponent]
})
export class TableModule { }
