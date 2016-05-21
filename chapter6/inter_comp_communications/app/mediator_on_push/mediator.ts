import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {OrderComponent} from './order';
import {PriceQuoterComponent} from './price_quoter';
import {Stock} from './stock';

@Component({
    selector: 'app',
    template: `
    <h4>{{  getTime() | date:'jms' }}</h4> 
    <price-quoter (buy)="priceQuoteHandler($event)"></price-quoter><br>
    <br/>
    <order-processor [stock]="stock"></order-processor>
  `,
    directives: [OrderComponent, PriceQuoterComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
class MediatorOnPushComponent {
    stock: Stock;

    getTime(){
        return new Date();
    }

    priceQuoteHandler(event:Stock) {
        this.stock = event;
    }
}
bootstrap(MediatorOnPushComponent);