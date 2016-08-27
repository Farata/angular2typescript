import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Get Weather</h1>
    <div>
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['weather']">Weather</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
