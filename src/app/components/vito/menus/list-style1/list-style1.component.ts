import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../../../models/menu-item';
import {PluginsService} from '../../../../plugins.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-style1',
  templateUrl: './list-style1.component.html',
  styles: []
})
export class ListStyle1Component implements OnInit, AfterContentInit {

  @Input() listClass =  'iq-menu';
  @Input() listItems: MenuItem[];
  @Input() collapseOpen;
  @Input() collapseName = '';

  constructor(private plugins: PluginsService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  activeLink(item) {
    return this.plugins.getActiveLink(item, this.router.url);
  }

}
