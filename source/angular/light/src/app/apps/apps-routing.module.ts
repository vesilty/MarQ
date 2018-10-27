import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from 'src/app/apps/calendar/calendar.component';
import { ChatComponent } from 'src/app/apps/chat/chat.component';
import { ContactGridComponent } from 'src/app/apps/contact-grid/contact-grid.component';
import { ContactListComponent } from 'src/app/apps/contact-list/contact-list.component';
import { SupportComponent } from 'src/app/apps/support/support.component';

const routes: Routes = [

  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'contact-grid',
    component: ContactGridComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'support',
    component: SupportComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
