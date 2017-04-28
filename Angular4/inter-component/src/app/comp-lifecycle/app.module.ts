import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from "./child.component";


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

