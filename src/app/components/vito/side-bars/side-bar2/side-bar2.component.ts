import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../../models/menu-item';
import {ApiService} from '../../../../services/api.service';
import SideBar from '../../../../fake-api/json/SideBar.json';

@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: [],
})
export class SideBar2Component implements OnInit {

  menuItems: MenuItem[] = SideBar.data;

  constructor(public apiService: ApiService) { }

  ngOnInit() {}

}
