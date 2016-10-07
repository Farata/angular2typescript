import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {OrderComponent} from './order';
import {PriceQuoterComponent} from './price-quoter';
import {Stock} from './stock';

@Component({
    selector: 'app',
    template: `
    <price-quoter (buy)="priceQuoteHandler($event)"></price-quoter><br>
    <br/>
    <order-processor [stock]="stock"></order-processor>
  `
})
class AppComponent {
    stock: Stock;

    priceQuoteHandler(event:Stock) {
        this.stock = event;
    }
}
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, OrderComponent,
                    PriceQuoterComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);