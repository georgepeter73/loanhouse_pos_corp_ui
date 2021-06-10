import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iq-card',
  templateUrl: './iq-card.component.html',
  styles: []
})
export class IqCardComponent implements OnInit {
  @Input() cardClass = 'iq-card';
  @Input() cardHeaderClass = 'iq-card-header d-flex justify-content-between';
  @Input() cardBodyClass = 'iq-card-body';
  @Input() cardFooterClass = 'card-footer';

  @Input() isCardHeader = true;
  @Input() isCardBody = true;
  @Input() isCardFooter = false;
  constructor() { }

  ngOnInit() {
  }

}
