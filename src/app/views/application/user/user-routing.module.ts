import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {UserListComponent} from './user-list/user-list.component';


const routes: Routes = [
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile-edit',
    component: ProfileEditComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
