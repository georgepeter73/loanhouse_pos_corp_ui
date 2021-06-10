import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { UiColorsComponent } from './ui-colors/ui-colors.component';
import {VitoModule} from '../../components/vito/vito.module';
import { UiTypographyComponent } from './ui-typography/ui-typography.component';
import { UiAlertComponent } from './ui-alert/ui-alert.component';
import { UiBadgesComponent } from './ui-badges/ui-badges.component';
import { UiBreadcrumbComponent } from './ui-breadcrumb/ui-breadcrumb.component';
import { UiGridComponent } from './ui-grid/ui-grid.component';
import { UiImagesComponent } from './ui-images/ui-images.component';
import { UiListGroupComponent } from './ui-list-group/ui-list-group.component';
import { UiMediaComponent } from './ui-media/ui-media.component';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';
import { UiVideoComponent } from './ui-video/ui-video.component';
import { UiCardsComponent } from './ui-cards/ui-cards.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UiPaginationComponent } from './ui-pagination/ui-pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { UiPopoversComponent } from './ui-popovers/ui-popovers.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { UiProgressbarsComponent } from './ui-progressbars/ui-progressbars.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UiTooltipsComponent } from './ui-tooltips/ui-tooltips.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UiButtonsComponent } from './ui-buttons/ui-buttons.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    UiColorsComponent,
    UiTypographyComponent,
    UiAlertComponent,
    UiBadgesComponent,
    UiBreadcrumbComponent,
    UiGridComponent,
    UiImagesComponent,
    UiListGroupComponent,
    UiMediaComponent,
    UiNotificationComponent,
    UiVideoComponent,
    UiCardsComponent,
    UiModalComponent,
    UiPaginationComponent,
    UiPopoversComponent,
    UiProgressbarsComponent,
    UiTabsComponent,
    UiTooltipsComponent,
    UiButtonsComponent,
    UiCarouselComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    VitoModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule
  ],
  exports: [UiColorsComponent,
    UiTypographyComponent,
    UiAlertComponent,
    UiBadgesComponent,
    UiBreadcrumbComponent,
    UiGridComponent,
    UiImagesComponent,
    UiListGroupComponent,
    UiMediaComponent,
    UiNotificationComponent,
    UiVideoComponent,
    UiCardsComponent,
    UiModalComponent,
    UiPaginationComponent,
    UiPopoversComponent,
    UiProgressbarsComponent,
    UiTabsComponent,
    UiTooltipsComponent,
    UiButtonsComponent,
    UiCarouselComponent]
})
export class CoreModule { }
