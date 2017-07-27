import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {environment} from '../../environments/environment';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {EbayComponent} from "./ebay.component";
import {SearchComponent} from "./search.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AmazonComponent} from "./amazon.component";
import {reducer} from './ngrx.reducers';
import {SearchEffects, ProductService} from './ngrx.effects';

@NgModule({
  imports: [ BrowserModule, CommonModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',        component: EbayComponent},
      {path: 'amazon', component: AmazonComponent}]),

    StoreModule.forRoot({ reducer }),
    EffectsModule.forRoot([SearchEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [ AppComponent, EbayComponent, AmazonComponent, SearchComponent],
  providers: [
    ProductService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
