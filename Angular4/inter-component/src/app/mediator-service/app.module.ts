import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StateService} from "./state.service";
import {EbayComponent} from "./ebay.component";
import {SearchComponent} from "./search.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AmazonComponent} from "./amazon.component";

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',        component: EbayComponent},
      {path: 'amazon', component: AmazonComponent}])
  ],
  declarations: [ AppComponent, EbayComponent, AmazonComponent, SearchComponent],
  providers:[StateService,
             {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
