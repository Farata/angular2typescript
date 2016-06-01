import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'order-processor',
    template: `
    Buying {{quantity}} shares of {{stockSymbol}}
  `,
    styles:[`:host {background: cyan;}`]
})
class OrderComponent {

    @Input() quantity: number;

    private _stockSymbol: string;

    @Input()
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
    <order-processor [stockSymbol]="stock" quantity="100"></order-processor>
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
