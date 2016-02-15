import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {OrderComponent} from './order';
import {PriceQuoterComponent} from './price_quoter';
import {Stock} from './stock';

@Component({
    selector: 'app',
    template: `
    <price-quoter (buy)="priceQuoteHandler($event)"></price-quoter><br>
    <br/>
    <order-processor [stock]="stock"></order-processor>
  `,
    directives: [OrderComponent, PriceQuoterComponent]
})
class MediatorComponent {
    stock: Stock;

    priceQuoteHandler(event:Stock) {
        this.stock = event;
    }
}
bootstrap(MediatorComponent);