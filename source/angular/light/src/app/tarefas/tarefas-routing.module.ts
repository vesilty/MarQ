import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasComponent } from 'src/app/tarefas/tarefas.component';


const routes: Routes = [
    {
        path: 'main',
        component: TarefasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule { }
