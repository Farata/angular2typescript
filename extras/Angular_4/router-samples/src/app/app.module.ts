import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product.component";
import {HomeComponent} from "./home.component";
import {routing} from "./app.routing";
import {ProductDetailComponentParam} from "./product-param.component";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent, ProductDetailComponentParam
  ],
  imports: [
    BrowserModule,
    RouterModule, routing
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
