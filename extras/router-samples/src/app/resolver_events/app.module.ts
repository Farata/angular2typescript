import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HomeResComponent} from "./home.component";
import {DataComponent} from "./data.component";
import {DataResolver} from "./data.resolver";
import {DataService} from "./data.service";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";

import { MdProgressBarModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    MdProgressBarModule, routing],
  declarations: [ AppComponent, HomeResComponent, DataComponent],
  providers:[DataService, DataResolver,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
