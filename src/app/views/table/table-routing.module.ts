import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableEditableComponent } from './table-editable/table-editable.component';


const routes: Routes = [
  {
    path: 'table-basic',
    component: TableBasicComponent
  },
  {
    path: 'data-table',
    component: DataTableComponent
  },
  {
    path: 'table-editable',
    component: TableEditableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
