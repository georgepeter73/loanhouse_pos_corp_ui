import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-email-compose-body',
  templateUrl: './email-compose-body.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EmailComposeBodyComponent implements OnInit {

  @Input() cardClass = '';
  @Input() cardTitle = 'card-title';
  @Input() isCloseModal = false;

  constructor() { }

  ngOnInit() {
  }

}
