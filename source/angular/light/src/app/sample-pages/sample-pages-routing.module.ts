import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from 'src/app/sample-pages/forgot-password/forgot-password.component';
import { ProfileComponent } from 'src/app/sample-pages/profile/profile.component';
import { InvoiceComponent } from 'src/app/sample-pages/invoice/invoice.component';
import { FaqsComponent } from 'src/app/sample-pages/faqs/faqs.component';
import { BlankPageComponent } from 'src/app/sample-pages/blank-page/blank-page.component';
import { LockedComponent } from 'src/app/sample-pages/locked/locked.component';
import { PageNotFoundComponent } from 'src/app/sample-pages/page-not-found/page-not-found.component';
import { ServerErrorComponent } from 'src/app/sample-pages/server-error/server-error.component';
import { PricingComponent } from 'src/app/sample-pages/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot_password',
    component: ForgotPasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'blank_page',
    component: BlankPageComponent
  },
  {
    path: 'locked',
    component: LockedComponent
  },
  {
    path: 'page_not_found',
    component: PageNotFoundComponent
  },
  {
    path: 'server_error',
    component: ServerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePagesRoutingModule { }
