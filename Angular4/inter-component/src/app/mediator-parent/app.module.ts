import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PriceQuoterComponent} from "./price.quoter.component";
import {OrderComponent} from "./order.component";

@NgModule({
  declarations: [
    AppComponent, PriceQuoterComponent, OrderComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
