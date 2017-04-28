import {Component, Inject, InjectionToken} from '@angular/core';

export const BACKEND_URL  = new InjectionToken('BackendUrl');

@Component({
  selector: 'app-root',
  template: '<h1>Injected the following value of BACKEND_URL: {{url}}</h1>}',
  providers: [  {provide:BACKEND_URL, useValue: 'myQAserver.com'}]
})
export class AppComponent {
  constructor(@Inject(BACKEND_URL) public url) {}
}
