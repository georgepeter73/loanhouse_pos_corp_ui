import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styles: []
})
export class TabContentComponent implements OnInit {

  @Input() tabContentClass = 'tab-pane fade';
  @Input() tabContentLink: string;

  constructor() { }

  ngOnInit() {
  }

}
