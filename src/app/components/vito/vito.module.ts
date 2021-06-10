import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loaders/loader1/loader.component';
import {ScrollTopComponent} from './scroll-top/scroll-top.component';
import { NavBar1Component } from './nav-bars/nav-bar1/nav-bar1.component';
import { SideBar1Component } from './side-bars/side-bar1/side-bar1.component';
import { ApexChartComponent } from './charts/apex-chart/apex-chart.component';
import { Breadcrumb1Component } from './breadcrumbs/breadcrumb1/breadcrumb1.component';
import { IqCardComponent } from './cards/iq-card/iq-card.component';
import { ListStyle1Component } from './menus/list-style1/list-style1.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { HighChartComponent } from './charts/high-chart/high-chart.component';
import {RouterModule} from '@angular/router';
import { TabNavComponent } from './tabs/tab-nav/tab-nav.component';
import { TabContentComponent } from './tabs/tab-content/tab-content.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

import { CardWithImageComponent } from './card-with-image/card-with-image.component';
import { SideBar2Component } from './side-bars/side-bar2/side-bar2.component';
import { RightSideBarComponent } from './side-bars/right-side-bar/right-side-bar.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { SideBarSettingsComponent } from './side-bars/side-bar-settings/side-bar-settings.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {I18nModule} from '../../i18n/i18n.module';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    LoaderComponent,
    ScrollTopComponent,
    NavBar1Component,
    SideBar1Component,
    ApexChartComponent,
    Breadcrumb1Component,
    IqCardComponent,
    ListStyle1Component,
    TabNavComponent,
    TabContentComponent,
    HighChartComponent,
    CardWithImageComponent,
    SideBar2Component,
    RightSideBarComponent,
    SideBarSettingsComponent,
    FullCalendarComponent
  ],
  exports: [
    LoaderComponent,
    ScrollTopComponent,
    NavBar1Component,
    SideBar1Component,
    ApexChartComponent,
    Breadcrumb1Component,
    IqCardComponent,
    ListStyle1Component,
    TabNavComponent,
    TabContentComponent,
    HighChartComponent,
    CardWithImageComponent,
    SideBar2Component,
    RightSideBarComponent,
    SideBarSettingsComponent,
    FullCalendarComponent
  ],
  imports: [
    CommonModule,
    NgScrollbarModule,
    RouterModule,
    LottieModule.forRoot({player: playerFactory}),
    ProgressbarModule,
    FullCalendarModule,
    I18nModule,
  ],
})
export class VitoModule { }
