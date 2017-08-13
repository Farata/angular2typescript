import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product.component";
import {LoginComponent} from "./login.component";

import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {routing} from "./app.routing";

import {LoginGuard} from "./login.guard";
import {UnsavedChangesGuard} from "./unsaved-changes.guard";


@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule, routing
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy},
             LoginGuard,UnsavedChangesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
