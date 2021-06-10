import {AfterContentChecked, AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styles: []
})
export class UiTabsComponent implements OnInit {

  TabNavItems = [
    {
      link: 'v-pills-home-tab',
      label: 'Home',
      icon: '',
      isActive: true
    },
    {
      link: 'v-pills-profile-tab',
      label: 'Profile',
      icon: '',
      isActive: false
    },
    {
      link: 'v-pills-message-tab',
      label: 'Messages',
      icon: '',
      isActive: false
    },
    {
      link: 'v-pills-setting-tab',
      label: 'Settings',
      icon: '',
      isActive: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
