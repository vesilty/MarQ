import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ApproutingModule} from './app-routing-module'
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
