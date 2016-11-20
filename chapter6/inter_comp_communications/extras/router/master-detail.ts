import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import {ProductDetailComponentParam} from "./components/product-param";

const routes: Routes = [
    {path: 'product/:id', component: ProductDetailComponentParam}
];

class Product {
    id: number;
    description: string;
}

@Component({
    selector: 'app',
    template: `
        <ul style="width: 100px;">
           <li *ngFor="let product of products"
            [class.selected]="product === selectedProduct"
            (click) = onSelect(product)>
              <span>{{product.id}} {{product.description}} </span>
           </li>        
       </ul>
        
        <router-outlet></router-outlet>
    `,
    styles:[`.selected {background-color: cornflowerblue}`]
})
class AppComponent {
    selectedProduct: Product;

    products: Product[] = [
        {id: 1, description: "iPhone 7"},
        {id: 2, description: "Samsung 7"},
        {id: 3, description: "MS Lumina"}
    ];

    constructor(private _router: Router){}

    onSelect(prod: Product): void {
        this.selectedProduct = prod;
        this._router.navigate(["/product", prod.id]);
    }
}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, ProductDetailComponentParam],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
