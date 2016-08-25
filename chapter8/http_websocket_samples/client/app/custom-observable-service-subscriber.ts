import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

import {CustomObservableService} from "./custom-observable-service";

@Component({
  selector: 'app',
  providers: [ CustomObservableService ],
  template: `<h1>Simple subscriber to a service</h1>
       Current time: {{currentTime | date: 'jms'}}
  `})
class AppComponent {

  currentTime: Date;

  constructor(private sampleService: CustomObservableService) {

      this.sampleService.createObservableService()
        .subscribe( data => this.currentTime = data );
  }
}

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
