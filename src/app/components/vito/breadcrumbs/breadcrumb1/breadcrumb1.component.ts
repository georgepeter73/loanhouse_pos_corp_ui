import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumb1',
  templateUrl: './breadcrumb1.component.html',
  styles: []
})
export class Breadcrumb1Component implements OnInit {

  @Input() title: string;
  @Input() items: any[];

  constructor() { }

  ngOnInit() {
  }

}
