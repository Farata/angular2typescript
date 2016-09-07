import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from './components/product-child';
import {ProductDescriptionComponent} from './components/product-description';
import {SellerInfoComponent} from './components/seller';

const routes: Routes = [
    {path: '',            component: HomeComponent},
    {path: 'product/:id', component: ProductDetailComponent,
        children: [
          {path: '',           component: ProductDescriptionComponent},
          {path: 'seller/:id', component: SellerInfoComponent}
        ]}
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product', 1234]">Product Details</a> 
        <router-outlet></router-outlet>
    `
})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent,
                    ProductDescriptionComponent, SellerInfoComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);