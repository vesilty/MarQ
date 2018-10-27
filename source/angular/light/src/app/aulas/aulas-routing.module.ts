import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from 'src/app/aulas/aulas.component';


const routes: Routes = [
    {
        path: 'main',
        component: AulasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AulasRoutingModule { }
