import {  Component, Input }  from '@angular/core';


@Component({
  selector: 'order-processor',
  template: `
    Buying {{quantity}} shares of {{stockSymbol}}
  `,
  styles:[`:host {background: cyan;}`]
})
export class OrderComponent {

  @Input() quantity: number;

  private _stockSymbol: string;

  @Input()
  set stockSymbol(value: string) {

    if (value != undefined) {
      this._stockSymbol = value;
      console.log(`Sending a Buy order to NASDAQ: ${this.stockSymbol}  ${this.quantity}`);
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }
}
