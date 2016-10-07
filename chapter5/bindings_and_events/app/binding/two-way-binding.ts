import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'stock-search',
    template: `<input type='text' placeholder= "Enter stock symbol" [(ngModel)] = "lastStockSymbol" />
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
    template:`<stock-search></stock-search>`

})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, StockComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
