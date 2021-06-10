import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import {VitoModule} from '../../../components/vito/vito.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import {AgGridModule} from 'ag-grid-angular';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddUserComponent, ProfileComponent, ProfileEditComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    VitoModule,
    AgGridModule,
    FormsModule
  ],
  exports: [AddUserComponent, ProfileComponent, ProfileEditComponent, UserListComponent]
})
export class UserModule { }
