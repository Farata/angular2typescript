import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, RouteSegment, OnActivate, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
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
class ProductReviewsComponent implements OnActivate {
  stars: number;
  category: string;

  routerOnActivate(currentSegment: RouteSegment) {
    this.stars = parseInt(currentSegment.getParam('stars'));
  }
}

@Component({
  selector: 'product-list',
  directives: [ROUTER_DIRECTIVES],
  styles: ['.list {background-color: yellow}'],
  template: `
    <div class="list">
      <h1>Product List</h1>
      <pre>Category: {{category}}<br>Title:    {{title}}</pre>
      <a [routerLink]="['reviews', {stars: 5}]">Five star reviews</a>
      <router-outlet></router-outlet>
    </div>`
})
@Routes([
  { path: 'reviews', component: ProductReviewsComponent }
])
class ProductListComponent implements OnActivate {
  category: string;
  title: string;

  routerOnActivate(currentSegment: RouteSegment) {
    this.category = currentSegment.getParam('category');
    this.title = currentSegment.getParam('title');
  }
}

@Component({
  selector: 'basic-routing',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <ul>
        <li><a [routerLink]="['./']">Home</a></li>
        <li><a [routerLink]="['./products', {category: 'books', title: 'angular'}]">Angular Books</a></li>
      </ul>
      <router-outlet></router-outlet>`
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/products', component: ProductListComponent }
])
class RootComponent { }

bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);
