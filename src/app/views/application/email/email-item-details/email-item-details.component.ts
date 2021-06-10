import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-email-item-details',
  templateUrl: './email-item-details.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EmailItemDetailsComponent implements OnInit {
  @Output() hideDetailsClick = new EventEmitter<string>();

  @Input() isDetailsShow: boolean;

  constructor() { }

  ngOnInit() {
  }

  hideDetailsClicked() {
    this.hideDetailsClick.emit('hide');
  }

}
