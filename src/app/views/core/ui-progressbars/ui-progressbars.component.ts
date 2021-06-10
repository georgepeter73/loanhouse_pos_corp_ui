import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-progressbars',
  templateUrl: './ui-progressbars.component.html',
  styles: []
})
export class UiProgressbarsComponent implements OnInit {
  type: string;
  stacked: any[] = [
    {
      value: 15,
      type: 'primary',
      label: ''
    },
    {
      value: 30,
      type: 'success',
      label: ''
    },
    {
      value: 30,
      type: 'info',
      label: ''
    }
  ];

  ngOnInit() {
  }

}
