import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PriceQuoterComponent} from "./price.quoter.component";

@NgModule({
  declarations: [
    AppComponent, PriceQuoterComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
