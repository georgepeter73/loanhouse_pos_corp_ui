import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

const routes: Routes = [
  {
    path: 'form-layout',
    component: FormLayoutComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'form-switch',
    component: FormSwitchComponent
  },
  {
    path: 'form-checkbox',
    component: FormCheckboxComponent
  },
  {
    path: 'form-radio',
    component: FormRadioComponent
  },
  {
    path: 'form-wizard',
    component: FormWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
