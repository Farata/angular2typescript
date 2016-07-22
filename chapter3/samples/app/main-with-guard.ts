import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';

import {LoginGuard} from './guards/login.guard';
import {UnsavedChangesGuard} from './guards/unsaved_changes.guard';

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <router-outlet></router-outlet>
    `
})
class RootComponent {}

bootstrap(RootComponent, [
    provideRouter([
      {path: '',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent,
          canActivate:[LoginGuard], canDeactivate:[UnsavedChangesGuard]}
    ]),
    LoginGuard, UnsavedChangesGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
