import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as ThemeState from '../../../../store/selectes/theme.selectors';
import {SetThemeColor, SetThemeMode, SetThemeRTL} from '../../../../store/actions/theme.actions';
import {Color} from '../../../../models/color';

@Component({
  selector: 'app-side-bar-settings',
  templateUrl: './side-bar-settings.component.html',
  styles: []
})
export class SideBarSettingsComponent implements OnInit {

  public shouldShow = false;
  themeColors = [];
  selectedColor = 'rgba(255,136,172,1)';
  isDark = false;
  isRTL = false;

  constructor(private store: Store<any>) {
    store.select(ThemeState.getColors).subscribe((colors) => this.themeColors = colors);
    store.select(ThemeState.color).subscribe((color) => this.selectedColor = color);
    store.select(ThemeState.isDark).subscribe((isDark) => this.isDark = isDark);
    store.select(ThemeState.isRTL).subscribe((isRTL) => this.isRTL = isRTL);
  }

  ngOnInit() {
    const defaultColor = this.themeColors.find(c => c.default === true);
    document.documentElement.style.setProperty('--iq-primary', defaultColor.primary);
    document.documentElement.style.setProperty('--iq-primary-light', defaultColor.primaryLight);
    document.documentElement.style.setProperty('--iq-bg-light-color', defaultColor.bodyBgLight);
    this.store.dispatch(new SetThemeColor(defaultColor.primary));

  }

  openSettingsBar() {
    if (this.shouldShow) {
      this.shouldShow = false;
    } else {
      this.shouldShow = true;
    }
  }

  clickThemeColor(color: Color) {
    document.documentElement.style.setProperty('--iq-primary', color.primary);
    document.documentElement.style.setProperty('--iq-primary-light', color.primaryLight);
    if (this.isDark) {
      document.documentElement.style.setProperty('--iq-bg-dark-color', color.bodyBgDark);
    } else {
      document.documentElement.style.setProperty('--iq-bg-light-color', color.bodyBgLight);
    }

    this.store.dispatch(new SetThemeColor(color.primary));
  }

  clickThemeMode(isDark: boolean) {
    const body = document.querySelector('body');

    if (!isDark) {
      body.classList.remove('dark');
      body.classList.add('light');
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
    }

    this.store.dispatch(new SetThemeMode(isDark));
  }

  clickThemeRTL(isRTL: boolean) {
    const html = document.querySelector('html');

    if (!isRTL) {
      html.setAttribute('dir', 'ltr');
    } else {
      html.setAttribute('dir', 'rtl');
    }

    this.store.dispatch(new SetThemeRTL(isRTL));
  }

  reset() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const color = new Color({});

    document.documentElement.style.setProperty('--iq-primary', color.primary);
    document.documentElement.style.setProperty('--iq-primary-light', color.primaryLight);
    if (this.isDark) {
      document.documentElement.style.setProperty('--iq-bg-dark-color', color.bodyBgDark);
    } else {
      document.documentElement.style.setProperty('--iq-bg-light-color', color.bodyBgLight);
    }

    html.setAttribute('dir', 'ltr');
    body.classList.remove('dark');
    body.classList.add('light');
  }
}
