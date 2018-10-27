import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificacoesComponent } from 'src/app/notificacoes/notificacoes.component';


const routes: Routes = [
    {
        path: 'main',
        component: NotificacoesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotificacoesRoutingModule { }
