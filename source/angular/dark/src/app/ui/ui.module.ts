import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { AlertComponent } from './alert/alert.component';
import { AnimationComponent } from './animation/animation.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonComponent } from './button/button.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { CardsComponent } from './cards/cards.component';
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
import { WavesComponent } from './waves/waves.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [AlertComponent, AnimationComponent, BadgesComponent, ButtonComponent, CollapseComponent, DialogsComponent, CardsComponent, IconsComponent, LabelsComponent, ListGroupComponent, MediaObjectComponent, NotificationComponent, PaginationComponent, PreloadersComponent, ProgressBarComponent, RangeSliderComponent, SortableComponent, TabsComponent, WavesComponent, TypographyComponent, HelperClassesComponent]
})
export class UiModule { }
