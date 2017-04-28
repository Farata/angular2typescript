import { Component } from '@angular/core';
import {IPriceQuote} from "./iprice.quote";

@Component({
  selector: 'app-root',
  template: `
   <price-quoter (lastPrice)="priceQuoteHandler($event)"></price-quoter><br>
    AppComponent received: {{stockSymbol}} {{price | currency:'USD':true}}`
})
export class AppComponent {

  stockSymbol: string;
  price:number;

  priceQuoteHandler(event:IPriceQuote) {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
  }
}
