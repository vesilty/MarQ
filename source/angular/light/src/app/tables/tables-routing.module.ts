import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from './normal/normal.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { GroupingComponent } from './grouping/grouping.component';
import { EditableTableComponent } from './editable-table/editable-table.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'normal',
    pathMatch: 'full'
  },
  {
    path: 'normal',
    component: NormalComponent
  },
  {
    path: 'advance',
    component: AdvanceTableComponent
  },
  {
    path: 'grouping',
    component: GroupingComponent
  },
  {
    path: 'editable',
    component: EditableTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
