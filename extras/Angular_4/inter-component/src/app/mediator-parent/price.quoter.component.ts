import {Component, Output, Directive, EventEmitter} from '@angular/core';
import {IStock} from './istock';

@Component({
  selector: 'price-quoter',
  template: `<strong><input type="button" value="Buy" (click)="buyStocks($event)">
               {{stockSymbol}} {{lastPrice | currency:'USD':true:'1.2-2'}}</strong>
              `,
  styles:[`:host {background: pink; padding: 5px 15px 15px 15px;}`]
})
export class PriceQuoterComponent {
  @Output() buy: EventEmitter <IStock> = new EventEmitter();

  stockSymbol: string = "IBM";
  lastPrice:number;

  constructor() {
    setInterval(() => {
      this.lastPrice = (100*Math.random());
    }, 2000);
  }

  buyStocks(): void{

    let stockToBuy: IStock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buy.emit(stockToBuy);
  }
}
