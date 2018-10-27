import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from 'src/app/email/inbox/inbox.component';
import { ComposeComponent } from 'src/app/email/compose/compose.component';
import { ReadMailComponent } from 'src/app/email/read-mail/read-mail.component';


const routes: Routes = [

    {
        path: 'inbox',
        component: InboxComponent
    },
    {
        path: 'compose',
        component: ComposeComponent
    },
    {
        path: 'read',
        component: ReadMailComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailRoutingModule { }
