import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Product1Component} from "./product1.component";
import {Product2Component} from "./product2.component";
import {ProductService} from "../switching/product.service";
import {MockProductService} from "../switching/mock.product.service";


@NgModule({
  imports:      [ BrowserModule],
  providers: [ProductService],
  // providers: [{provide:ProductService, useClass:MockProductService}],
  declarations: [ AppComponent, Product1Component, Product2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
