import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styles: []
})
export class UiPaginationComponent implements OnInit {
  currentPage: number = 2;

  constructor() { }

  ngOnInit() {
  }

}
