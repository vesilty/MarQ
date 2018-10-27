import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from 'src/app/forms/basic/basic.component';
import { AdvanceComponent } from 'src/app/forms/advance/advance.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
    },
    {
        path: 'basic',
        component: BasicComponent
    },
    {
        path: 'advance',
        component: AdvanceComponent
    },
    {
        path: 'form_example',
        component: FormExampleComponent
    },
    {
        path: 'form_validation',
        component: FormValidationComponent
    },
    {
        path: 'wizard',
        component: WizardComponent
    },
    {
        path: 'editors',
        component: EditorsComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
