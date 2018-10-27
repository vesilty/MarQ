import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule
  ],
  declarations: [ComposeComponent, InboxComponent, ReadMailComponent]
})
export class EmailModule { }
