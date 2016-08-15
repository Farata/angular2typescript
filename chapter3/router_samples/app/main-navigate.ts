import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product";

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent}
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <input type="button" value="Product Details" 
               (click)="navigateToProductDetail()" /> 
        <router-outlet></router-outlet>
    `
})
class AppComponent {

    constructor(private _router: Router){}

    navigateToProductDetail(){
        this._router.navigate(["/product"]);
    }
}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);