import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacoesComponent } from 'src/app/notificacoes/notificacoes.component';

import { NotificacoesRoutingModule } from './notificacoes-routing.module';
@NgModule({
  imports: [
    CommonModule,
    NotificacoesRoutingModule
  ],
  declarations: [NotificacoesComponent]
})
export class NotificacoesModule { }
