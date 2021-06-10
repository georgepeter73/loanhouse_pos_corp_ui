import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EmailItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
