import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {CustomObservableService} from "./custom_observable_service";

@Component({
  selector: 'subscriber',
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

bootstrap(AppComponent);
