import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from 'src/app/info/info.component';

import { InfoRoutingModule } from './info-routing.module';
@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
