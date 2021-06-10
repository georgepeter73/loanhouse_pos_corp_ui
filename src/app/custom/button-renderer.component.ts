import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" class="btn btn-sm btn-success" (click)="onClick($event, 'edit')">
      <i class="fa fa-pencil"></i> Edit
    </button>&nbsp;
    <button type="button" class="btn btn-sm btn-danger" (click)="onClick($event, 'delete')">
      <i class="fa fa-trash"></i> Delete
    </button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;

  agInit(params): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event, type: string) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        type,
        rowData: this.params.node.data
      }
      this.params.onClick(params);

    }
  }
}
