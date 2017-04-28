import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product.detail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot([
    {path: 'productDetail/:id', component: ProductDetailComponent}
  ])],
  declarations: [ AppComponent, ProductDetailComponent],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
