import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styles: []
})
export class TabNavComponent implements OnInit {

  @Input() tabClass = 'nav nav-pills';
  @Input() tagToggleType = 'pill';
  @Input() tabNavItems = [];

  constructor() { }

  ngOnInit() {
  }

}
