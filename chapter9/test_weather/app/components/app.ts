import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
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
