
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "@modules/auth/pages/login/login.component";



const routes: Routes = [
  { path: '', component: LoginComponent },
];
export const AuthRoutingModule = RouterModule.forChild(routes);
