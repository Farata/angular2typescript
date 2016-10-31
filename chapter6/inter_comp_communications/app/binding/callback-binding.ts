import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule, Component, Input}      from '@angular/core';
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

    @Input() whoToCall: Function;

    stockSymbol: string = "IBM";
    price:number;

    constructor() {
        setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: 100*Math.random()
            };

            this.price = priceQuote.lastPrice;

            this.whoToCall(priceQuote);
        }, 1000);
    }
}
@Component({
    selector: 'app',
    template: `
   <price-quoter [whoToCall] ="fnPriceQuoteHandler"></price-quoter><br>
    AppComponent received: {{stockSymbol}} {{price | currency:'USD':true:'1.2-2'}}`
})
class AppComponent {

    stockSymbol: string;
    price:number;

    fnPriceQuoteHandler: Function;

    ngOnInit(){
        //this.fnPriceQuoteHandler=this.priceQuoteHandler.bind(this);
        this.fnPriceQuoteHandler= obj => this.priceQuoteHandler(obj);
    }

    priceQuoteHandler(quote: IPriceQuote) {
        this.stockSymbol = quote.stockSymbol;
        this.price = quote.lastPrice;
    }
}
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, PriceQuoterComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);