import {Component, Inject, OpaqueToken} from '@angular/core';

export const BACKEND_URL  = new OpaqueToken('BackendUrl');

@Component({
  selector: 'app-root',
  template: 'Backend URL: {{url}}',
  providers: [  {provide:BACKEND_URL, useValue: 'myQAserver.com'}]
})
export class AppComponent {
  constructor(@Inject(BACKEND_URL) public url: string) {}
}
