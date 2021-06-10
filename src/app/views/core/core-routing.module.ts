import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UiColorsComponent} from './ui-colors/ui-colors.component';
import {UiTypographyComponent} from './ui-typography/ui-typography.component';
import {UiAlertComponent} from './ui-alert/ui-alert.component';
import {UiBadgesComponent} from './ui-badges/ui-badges.component';
import {UiBreadcrumbComponent} from './ui-breadcrumb/ui-breadcrumb.component';
import {UiGridComponent} from './ui-grid/ui-grid.component';
import {UiImagesComponent} from './ui-images/ui-images.component';
import {UiListGroupComponent} from './ui-list-group/ui-list-group.component';
import {UiMediaComponent} from './ui-media/ui-media.component';
import {UiNotificationComponent} from './ui-notification/ui-notification.component';
import {UiVideoComponent} from './ui-video/ui-video.component';
import {UiCardsComponent} from './ui-cards/ui-cards.component';
import {UiModalComponent} from './ui-modal/ui-modal.component';
import {UiPaginationComponent} from './ui-pagination/ui-pagination.component';
import {UiPopoversComponent} from './ui-popovers/ui-popovers.component';
import {UiProgressbarsComponent} from './ui-progressbars/ui-progressbars.component';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';
import { UiTooltipsComponent } from './ui-tooltips/ui-tooltips.component';
import { UiButtonsComponent } from './ui-buttons/ui-buttons.component';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';

const routes: Routes = [
  {
    path: 'colors',
    component: UiColorsComponent
  },
  {
    path: 'typography',
    component: UiTypographyComponent
  },
  {
    path: 'alert',
    component: UiAlertComponent
  },
  {
    path: 'badges',
    component: UiBadgesComponent
  },
  {
    path: 'breadcrumb',
    component: UiBreadcrumbComponent
  },
  {
    path: 'grid',
    component: UiGridComponent
  },
  {
    path: 'images',
    component: UiImagesComponent
  },
  {
    path: 'list-group',
    component: UiListGroupComponent
  },
  {
    path: 'media',
    component: UiMediaComponent
  },
  {
    path: 'notification',
    component: UiNotificationComponent
  },
  {
    path: 'video',
    component: UiVideoComponent
  },
  {
    path: 'cards',
    component: UiCardsComponent
  },
  {
    path: 'modal',
    component: UiModalComponent
  },
  {
    path: 'pagination',
    component: UiPaginationComponent
  },
  {
    path: 'popovers',
    component: UiPopoversComponent
  },
  {
    path: 'progressbars',
    component: UiProgressbarsComponent
  },
  {
    path: 'tabs',
    component: UiTabsComponent
  },
  {
    path: 'tooltips',
    component: UiTooltipsComponent
  },
  {
    path: 'buttons',
    component: UiButtonsComponent
  },
  {
    path: 'carousel',
    component: UiCarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
