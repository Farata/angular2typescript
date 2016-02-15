import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
//import 'rxjs/Rx'; // import all operators
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app",
    template: `
       <h2>Observable events demo</h2>
      <input type="text" placeholder="Enter stock" [ngFormControl]="searchInput">
    `
})
class AppComponent {

    searchInput: Control;

    constructor(){
        this.searchInput = new Control('');

        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(stock => this.getStockQuoteFromServer(stock));
    }

    getStockQuoteFromServer(stock) {

        console.log(`The price of ${stock} is ${100*Math.random().toFixed(4)}`);
    }
}
bootstrap(AppComponent);