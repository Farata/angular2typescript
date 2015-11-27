// These two lines are commented out because we use the dev version of angular from angular2.dev.js
// import 'reflect-metadata';
// import 'zone.js';

import {Component, bootstrap, provide} from 'angular2/angular2';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from "./components/product";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,APP_BASE_HREF,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';



@Component({
    selector: 'basic-routing',

    template: `<a [router-link]="['/Home']">Home</a>
              <a [router-link]="['/ProductDetail']">Product Details</a>

              <router-outlet></router-outlet>`,

    directives: [ ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'  }
])
class RootComponent{
}

// bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF,{useValue:'/'}) ]);

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

