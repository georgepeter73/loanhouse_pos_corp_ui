import { NgModule } from '@angular/core';
import {VitoModule} from '../components/vito/vito.module';

import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';

import {Dashboard1Component} from './dashboards/dashboard1/dashboard1.component';
// import { LottieModule } from 'ngx-lottie';
// import player from 'lottie-web';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { NgwWowModule } from 'ngx-wow';
import {FlatpickrModule} from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { CalendarComponent } from './application/calendar/calendar.component';
import { SocialAppComponent } from './application/Social/social-app/social-app.component';
import { SocialPostComponent } from './application/Social/social-post/social-post.component';
import { AddSocialPostComponent } from './application/Social/add-social-post/add-social-post.component';
import { ProjectManagementComponent } from './application/project-management/project-management.component';
import {UserModule} from './application/user/user.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProjectListComponent } from './application/todo/project-list/project-list.component';
import { TaskListComponent } from './application/todo/task-list/task-list.component';
import { TodoListingComponent } from './application/todo/todo-listing/todo-listing.component';

import { NgDragDropModule } from 'ng-drag-drop';
import {DndModule} from 'ng2-dnd';
import {NgSelectModule} from '@ng-select/ng-select';

import {SearchFilterPipe} from '../pipes/search-filter.pipe';
import {I18nModule} from '../i18n/i18n.module';
// export function playerFactory() {
//   return player;
// }

@NgModule({
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    CalendarComponent,
    ProjectManagementComponent,
    SocialAppComponent,
    SocialPostComponent,
    AddSocialPostComponent,
    ProjectListComponent,
    TaskListComponent,
    TodoListingComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    VitoModule,
    // LottieModule.forRoot({player: playerFactory}),
    ProgressbarModule,
    CarouselModule,
    TabsModule,
    NgScrollbarModule,
    NgwWowModule,
    SlickCarouselModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    UserModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot(),
    NgSelectModule,
    DndModule.forRoot(),
    I18nModule
  ],
  exports: [
    SocialAppComponent,
    SocialPostComponent,
    AddSocialPostComponent,
    ProjectManagementComponent,
    ProjectListComponent,
    TaskListComponent,
    TodoListingComponent,
    SearchFilterPipe
  ]
})
export class ViewsModule { }
