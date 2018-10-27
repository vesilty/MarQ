import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [BasicComponent, AdvanceComponent, FormExampleComponent, FormValidationComponent, WizardComponent, EditorsComponent]
})
export class FormsModule { }
