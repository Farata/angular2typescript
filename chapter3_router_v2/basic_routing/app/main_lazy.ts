import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {LuxuryComponent} from "./components/luxury";

// This is a non-working app. It used to work in Angular Beta,
// but support of lazy loading of the routes was removed from Angular RC.1

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
    template: `<a [routerLink]="['/']">Home</a>
               <a [routerLink]="['/product']">Product Details</a>
               <a [routerLink]="['/luxury']">Luxury Items</a>
               <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/',        component: HomeComponent},
    {path: '/product', component: ProductDetailComponent},
    {path:'/luxury', component: LuxuryComponent
    }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

/*
 @Routes([
 {path: '/',        component: HomeComponent},
 {path: '/product', component: ProductDetailComponent},
 {path:'/luxury',
 loader: ()=> System.import('app/components/luxury')
 .then(libModule => libModule.LuxuryComponent),
 as: 'Luxury'
 }
 */
