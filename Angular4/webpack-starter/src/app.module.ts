import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { ROUTING } from './app.routing';
import { MyApp } from './app/app';
import { About } from './app/about/about';
import { Home } from './app/home/home';

@NgModule({
  imports: [ BrowserModule, HttpModule, ROUTING ],
  declarations: [ MyApp, About, Home ],
  bootstrap: [ MyApp ]
})
export class AppModule {}
