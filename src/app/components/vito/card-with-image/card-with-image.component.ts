import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-with-image',
  templateUrl: './card-with-image.component.html',
  styles: []
})
export class CardWithImageComponent implements OnInit {

  @Input() cardClass = 'iq-card';
  @Input() cardRowClass = 'row no-gutters';
  @Input() cardBodyClass = 'card-body';
  constructor() { }

  ngOnInit() {
  }

}
