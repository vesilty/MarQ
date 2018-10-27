import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
    // {path : 'dashboard/main', component :  MainComponent  },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'email',
        loadChildren: './email/email.module#EmailModule'
    },
    {
        path: 'apps',
        loadChildren: './apps/apps.module#AppsModule'
    },
    {
        path : 'widget', 
        component :  WidgetComponent  
    },
    {
        path: 'ui',
        loadChildren: './ui/ui.module#UiModule'
    },
    {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule'
    },
    {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },
    {
        path: 'media',
        loadChildren: './media/media.module#MediaModule'
    },
    {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },
    {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },
    {
        path: 'sample',
        loadChildren: './sample-pages/sample-pages.module#SamplePagesModule'
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

    // {path : 'dashboard/ecommerce', component :  EcommerceComponent  },
    // {path : 'email/inbox', component :  InboxComponent  },
    // {path : 'email/compose', component :  ComposeComponent  },
    // {path : 'email/read', component :  ReadMailComponent  },
    // {path : 'apps/chat', component :  ChatComponent  },
    // {path : 'apps/contact-list', component :  ContactListComponent  },
    // {path : 'apps/contact-grid', component :  ContactGridComponent  },
    // {path : 'apps/support', component :  SupportComponent  },
    // {path : 'apps/calendar', component :  CalendarComponent  },
    // {path : 'widget', component :  WidgetComponent  },
    // {path : 'ui/alert', component :  AlertComponent  },
    // { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ApproutingModule { }

