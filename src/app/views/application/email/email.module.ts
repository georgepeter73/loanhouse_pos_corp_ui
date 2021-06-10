import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { IndexComponent } from './index/index.component';
import {VitoModule} from '../../../components/vito/vito.module';
import { EmailItemComponent } from './email-item/email-item.component';
import { EmailItemDetailsComponent } from './email-item-details/email-item-details.component';
import { EmailComposeBodyComponent } from './email-compose-body/email-compose-body.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';


@NgModule({
  declarations: [IndexComponent, EmailItemComponent, EmailItemDetailsComponent, EmailComposeBodyComponent, EmailComposeComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    VitoModule
  ],
  exports: [IndexComponent, EmailItemComponent, EmailItemDetailsComponent, EmailComposeBodyComponent, EmailComposeComponent]
})
export class EmailModule { }
