import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product.detail.component";
import {HomeComponent} from "./home.component";
import {routing} from "./app.routing";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, routing
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
