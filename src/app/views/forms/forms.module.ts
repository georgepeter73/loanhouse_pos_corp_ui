import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import {VitoModule} from '../../components/vito/vito.module';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

@NgModule({
  declarations: [FormLayoutComponent, FormValidationComponent, FormSwitchComponent, FormCheckboxComponent, FormRadioComponent, FormWizardComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    VitoModule
  ],
  exports: [
    FormLayoutComponent,
    FormValidationComponent,
    FormSwitchComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormWizardComponent
  ]
})
export class FormsModule { }
