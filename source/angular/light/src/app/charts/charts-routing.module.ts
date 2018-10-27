import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { KnobComponent } from './knob/knob.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SparklineComponent } from './sparkline/sparkline.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'morris',
    pathMatch: 'full'
  },
  {
    path: 'morris',
    component: MorrisComponent
  },
  {
    path: 'flot',
    component: FlotComponent
  },
  {
    path: 'chartjs',
    component: ChartjsComponent
  },
  {
    path: 'sparkline',
    component: SparklineComponent
  },
  {
    path: 'knob',
    component: KnobComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
