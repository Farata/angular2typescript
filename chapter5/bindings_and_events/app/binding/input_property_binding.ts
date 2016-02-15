import {bootstrap} from 'angular2/platform/browser';
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'order-processor',
    template: `
    Buying {{quantity}} shares of {{stockSymbol}}
  `,
    styles:[`:host {background: cyan;}`]
})
class OrderComponent {

    @Input() quantity: number;
  //  @Input('stock-symbol') stockSymbol: string;

    private _stockSymbol: string;

    @Input('stock-symbol')
    set stockSymbol(value: string) {
        this._stockSymbol = value;
        if (this._stockSymbol != undefined) {
          console.log(`Sending a Buy order to NASDAQ: ${this.stockSymbol}   ${this.quantity}`);
       }
    }

    get stockSymbol(): string {
        return this._stockSymbol;
    }
}

@Component({
    selector: 'app',
    template: `
    <input type="text" placeholder="Enter stock (e.g. AAPL)"  (change)="onInputEvent($event)">
    <br/>
    <order-processor [stock-symbol]="stock" quantity="100"></order-processor>
  `,
    directives: [OrderComponent]
})
class AppComponent {
    stock:string;

    onInputEvent({target}):void{
        this.stock=target.value;
    }
}
bootstrap(AppComponent);
