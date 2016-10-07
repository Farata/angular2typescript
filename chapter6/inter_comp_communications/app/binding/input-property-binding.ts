import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Input }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  `
})
class AppComponent {
    stock:string;

    onInputEvent({target}):void{
        this.stock=target.value;
    }
}
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, OrderComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

