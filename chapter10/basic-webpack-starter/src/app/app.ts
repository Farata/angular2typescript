import { Component } from '@angular/core';
import { Home } from './home';
import { About } from './about';

@Component({
  selector: 'my-app',
  template: `
    <h1>Basic Webpack Starter</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MyApp {}
