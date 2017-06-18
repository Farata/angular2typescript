import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Detail</a>
        <a [routerLink]="['/login']">Login</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
