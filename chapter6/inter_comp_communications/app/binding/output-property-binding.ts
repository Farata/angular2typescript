import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Output, EventEmitter }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}

@Component({
    selector: 'price-quoter',
    template: `<strong>Inside PriceQuoterComponent:
               {{stockSymbol}} {{price | currency:'USD':true:'1.2-2'}}</strong>`,
    styles:[`:host {background: pink;}`]
})
class PriceQuoterComponent {
    @Output() lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();
    stockSymbol: string = "IBM";
    price:number;

    constructor() {
        setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                //lastPrice: (100*Math.random()).toFixed(2)
                lastPrice: 100*Math.random()
            };

            this.price = priceQuote.lastPrice;

            this.lastPrice.emit(priceQuote);
        }, 1000);
    }
}
@Component({
    selector: 'app',
    template: `
   <price-quoter (lastPrice)="priceQuoteHandler($event)"></price-quoter><br>
    AppComponent received: {{stockSymbol}} {{price | currency:'USD':true:'1.2-2'}}`,
    directives: [PriceQuoterComponent]
})
class AppComponent {

    stockSymbol: string;
    price:number;

    priceQuoteHandler(event:IPriceQuote) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    }
}
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, PriceQuoterComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);