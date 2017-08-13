import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product-child.component";
import {HomeComponent} from "../home.component";
import {routing} from "./app.routing";
import {ProductDescriptionComponent} from "./product-description.component";
import {SellerInfoComponent} from "./seller.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent,
    ProductDescriptionComponent, SellerInfoComponent // used in child routes
  ],
  imports: [
    BrowserModule,
    RouterModule, routing
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
