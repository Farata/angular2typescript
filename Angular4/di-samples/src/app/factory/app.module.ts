import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Product1Component} from "./product1.component";
import {Product2Component} from "./product2.component";
import {ProductService} from "./product.service";

import { environment } from '../../environments/environment';

@NgModule({
  imports:      [ BrowserModule],
  providers: [ProductService,
              {provide: "IS_DEV_ENVIRONMENT", useValue: environment.production}],
  declarations: [ AppComponent, Product1Component, Product2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
