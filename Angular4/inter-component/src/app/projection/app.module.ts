import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
