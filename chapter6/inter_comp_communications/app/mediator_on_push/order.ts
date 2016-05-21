import {Component, Input} from '@angular/core';
import {Stock} from './stock';

@Component({
    selector: 'order-processor',
    template: `{{message}}`,
    styles:[`:host {background: cyan;}`]
})
export class OrderComponent {

    message:string = "Waiting for the orders...";

    private _stock: Stock;

    @Input() set stock(value: Stock ){
        if (value && value.bidPrice != undefined) {
            this.message = `Placed order to buy 100 shares
                          of ${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
        }
    }

    get stock(): Stock{
        return this._stock;
    }
}

