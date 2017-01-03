import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HomeComponent} from "../home.component";
import {routing} from "./app.routing";
import {ProductDetailComponent} from "../product.component";
import {LoginGuard} from "./login.guard";
import {UnsavedChangesGuard} from "./unsaved-changes.guard";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, routing
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy},
             LoginGuard,UnsavedChangesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
