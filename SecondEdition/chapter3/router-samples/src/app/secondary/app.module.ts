import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HomeComponent} from "./home.component";
import {ChatComponent} from "./chat.component";
import {routing} from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, routing],
  declarations: [ AppComponent, HomeComponent, ChatComponent],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
