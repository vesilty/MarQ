import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasComponent } from 'src/app/tarefas/tarefas.component';

import { TarefasRoutingModule } from './tarefas-routing.module';
@NgModule({
  imports: [
    CommonModule,
    TarefasRoutingModule
  ],
  declarations: [TarefasComponent]
})
export class TarefasModule { }
