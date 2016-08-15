import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ActivatedRoute, provideRouter, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './components/home';

@Component({
  selector: 'product-reviews',
  styles: ['.reviews {background-color: cyan; margin: 10px;}'],
  template: `
    <div class="reviews">
      <h3>Product Reviews:</h3>
      <pre>Stars: {{stars}}<br></pre>
    </div>`
})
class ProductReviewsComponent {
  stars: number;
  category: string;

  constructor(route: ActivatedRoute) {
    this.stars = parseInt(route.snapshot.params['stars']);
  }
}

@Component({
  selector: 'product-list',
  template: ''
})
class ProductListDefaultChildComponent {}

@Component({
  selector: 'product-list',
  directives: [ROUTER_DIRECTIVES],
  styles: ['.list {background-color: yellow}'],
  template: `
    <div class="list">
      <h1>Product List</h1>
      <pre>Category: {{category}}<br>Title:    {{title}}</pre>
      <a [routerLink]="['./reviews', {stars: 5}]">Five star reviews</a>
      <router-outlet></router-outlet>
    </div>`
})
class ProductListComponent {
  category: string;
  title: string;

  constructor(route: ActivatedRoute) {
    this.category = route.snapshot.params['category'];
    this.title = route.snapshot.params['title'];
  }
}

@Component({
  selector: 'basic-routing',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <ul>
        <li><a [routerLink]="['/']">Home</a></li>
        <li><a [routerLink]="['/products', {category: 'books', title: 'angular'}]">Angular Books</a></li>
      </ul>
      <router-outlet></router-outlet>`
})
class RootComponent { }

bootstrap(RootComponent, [
  provideRouter([
      { path: '/', component: HomeComponent },
      { path: '/products', component: ProductListComponent, children: [
          { path: '',        component: ProductListDefaultChildComponent},
          { path: 'reviews', component: ProductReviewsComponent}
      ]}
  ]),
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);
