import {Component, Output, EventEmitter}  from '@angular/core';
import {IPriceQuote} from "./iprice.quote";


@Component({
  selector: 'price-quoter',
  template: `<strong>Inside PriceQuoterComponent:
               {{stockSymbol}} {{price | currency:'USD':true}}</strong>`,
  styles:[`:host {background: pink;}`]
})
export class PriceQuoterComponent {

  @Output() lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();

  stockSymbol: string = "IBM";
  price:number;

  constructor() {
    setInterval(() => {
      let priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100*Math.random()
      };

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);
    }, 1000);
  }
}
