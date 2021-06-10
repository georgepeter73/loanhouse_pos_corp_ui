import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../../models/menu-item';
import {ApiService} from '../../../../services/api.service';
import SideBar from '../../../../fake-api/json/SideBar.json';
import {PluginsService} from '../../../../plugins.service';

@Component({
  selector: 'app-side-bar1',
  templateUrl: './side-bar1.component.html',
  styleUrls: [],
})
export class SideBar1Component implements OnInit {

  menuItems: MenuItem[] = SideBar.data;

  constructor(public apiService: ApiService, private plugins: PluginsService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    /*this.apiService.getMenuList().subscribe((data: {}) => {
      this.menuItems = data;
    });*/
  }

  miniMenu() {
    this.plugins.wrapperMenuToggle();
  }

}
