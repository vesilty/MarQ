import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasComponent } from 'src/app/aulas/aulas.component';

import { AulasRoutingModule } from './aulas-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AulasRoutingModule
  ],
  declarations: [AulasComponent]
})
export class AulasModule { }
