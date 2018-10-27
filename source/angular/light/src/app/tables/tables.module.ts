import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { NormalComponent } from './normal/normal.component';
import { GroupingComponent } from './grouping/grouping.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  declarations: [NormalComponent, GroupingComponent, EditableTableComponent, AdvanceTableComponent]
})
export class TablesModule { }
