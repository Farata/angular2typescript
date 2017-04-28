import {Component, Input} from '@angular/core';
import {IStock} from './istock';

@Component({
  selector: 'order-processor',
  template: `{{message}}`,
  styles:[`:host {background: cyan;}`]
})
export class OrderComponent {

  message:string = "Waiting for orders...";

  private _stock: IStock;

  @Input() set stock(value: IStock ){
    if (value && value.bidPrice != undefined) {
      this.message = `Placed order to buy 100 shares
                          of ${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
    }
  }

  get stock(): IStock{
    return this._stock;
  }
}

