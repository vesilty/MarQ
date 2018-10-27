import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AnimationComponent } from './animation/animation.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { LabelsComponent } from './labels/labels.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { NotificationComponent } from './notification/notification.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreloadersComponent } from './preloaders/preloaders.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { SortableComponent } from './sortable/sortable.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { WavesComponent } from './waves/waves.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';

const routes: Routes = [

  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'buttons',
    component: ButtonComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'collapse',
    component: CollapseComponent
  },
  {
    path: 'dialogs',
    component: DialogsComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'labels',
    component: LabelsComponent
  },
  {
    path: 'list-group',
    component: ListGroupComponent
  },
  {
    path: 'media-object',
    component: MediaObjectComponent
  },
  {
    path: 'notifications',
    component: NotificationComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'preloaders',
    component: PreloadersComponent
  },
  {
    path: 'progress-bars',
    component: ProgressBarComponent
  },
  {
    path: 'range-slider',
    component: RangeSliderComponent
  },
  {
    path: 'sortable',
    component: SortableComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'waves',
    component: WavesComponent
  },
  {
    path: 'helper',
    component: HelperClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
