import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OrderComponent} from "./order.componenent";

@NgModule({
  declarations: [
    AppComponent, OrderComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
