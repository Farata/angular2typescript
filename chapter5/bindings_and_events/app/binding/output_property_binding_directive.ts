import {bootstrap} from 'angular2/platform/browser';
import {Component, Output, Directive, EventEmitter} from 'angular2/core';

interface IPriceQuote {
    stockSymbol: string,
    lastPrice: number
}

@Directive({
    selector: 'price-quoter',
})
class PriceQuoter {
    @Output('last-price') lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();

    constructor() {
        setInterval(() => {

            let priceQuote: IPriceQuote = {
                stockSymbol: "IBM",
                lastPrice: (100*Math.random()).toFixed(2)
            };

            this.lastPrice.emit(priceQuote)
        }, 1000);
    }
}
@Component({
    selector: 'app',
    template: `
    <price-quoter (last-price)="priceQuoteHandler($event)">
    </price-quoter>
  `,
    directives: [PriceQuoter]
})
class AppComponent {
    priceQuoteHandler(event:IPriceQuote) {
        console.log(`AppComponent received: ${event.stockSymbol} \$${event.lastPrice}`);
    }
}
bootstrap(AppComponent);