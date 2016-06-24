import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';
import {HomeComponent} from './shared/home.component';
import {ProductListComponent} from './shared/product-list.component';

@Component({
  selector: 'app',
  styles: [`ul {padding: 0} li {display: inline; margin-right: 10px;}`],
  template: `
    <ul>
      <li><a [routerLink]="['./']">Home</a></li>
      <li><a [routerLink]="['./products']">Products</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/products', component: ProductListComponent }
])
class RootComponent {}

bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);
