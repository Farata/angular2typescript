import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS, 
        LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'product',
    template: '<h1 >Product Detail Component</h1>'
})
export class ProductDetailComponent {}

@Component({
    selector: 'home',
    template: '<h1 >Home Component</h1>'
})
export class HomeComponent {}

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
              <a [routerLink]="['/ProductDetail']">Product Details</a>
              <a [routerLink]="['/Luxury']">Luxury Items</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'  },
    {path:'/luxury',
                    loader: ()=> System.import('app/components/luxury')
                                        .then(libModule => libModule.LuxuryComponent),
                    as: 'Luxury'
    }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
