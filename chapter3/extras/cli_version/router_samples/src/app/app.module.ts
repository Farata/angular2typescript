import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product.component";
import {HomeComponent} from "./home.component";
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, routing,
    FormsModule,
    HttpModule
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
