import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePagesRoutingModule } from './sample-pages-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { LockedComponent } from './locked/locked.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
  imports: [
    CommonModule,
    SamplePagesRoutingModule
  ],
  declarations: [TimelineComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, ProfileComponent, PricingComponent, InvoiceComponent, FaqsComponent, BlankPageComponent, LockedComponent, PageNotFoundComponent, ServerErrorComponent]
})
export class SamplePagesModule { }
