import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycalendarComponent } from './mycalendar/mycalendar.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// PrimeNG components
import {CalendarModule, CarouselModule, GrowlModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MycalendarComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    CalendarModule,
    CarouselModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
