import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';


import { AppComponent } from './app.component';
import {ConfirmationService} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  providers:  [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
