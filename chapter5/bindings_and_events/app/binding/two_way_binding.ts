import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'stock-search',
    template: `<input type='text' placeholder= "Enter stock symbol" [(ngModel)] = "lastStockSymbol">
               <br>The value of lastStockSymbol is {{lastStockSymbol}}`
})
class StockComponent {

    lastStockSymbol: string;

    constructor() {
        setTimeout(() => {
            // Code to get the last entered stock from
            // local history goes here (not implemented)

            this.lastStockSymbol="AAPL";
        }, 2000);
    }
}
@Component({
    selector: 'app',
    directives: [StockComponent],
    template:`<stock-search></stock-search>`

})
class AppComponent {}
bootstrap(AppComponent);