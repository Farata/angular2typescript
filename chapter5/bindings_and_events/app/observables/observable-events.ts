import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl,  ReactiveFormsModule} from '@angular/forms';
//import 'rxjs/Rx'; // import all operators
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app",
    template: `
       <h2>Observable events demo</h2>
      <input type="text" placeholder="Enter stock" [formControl]="searchInput">
    `
})
class AppComponent {

    searchInput: FormControl = new FormControl('');

    constructor(){

        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(stock => this.getStockQuoteFromServer(stock));
    }

    getStockQuoteFromServer(stock: string) {

        console.log(`The price of ${stock} is ${100*Math.random().toFixed(4)}`);
    }
}

@NgModule({
    imports:      [ BrowserModule,  ReactiveFormsModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

/*



import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {Control} from '@angular/common';
//import 'rxjs/Rx'; // import all operators
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app",
    directives: [REACTIVE_FORM_DIRECTIVES],
    template: `
       <h2>Observable events demo</h2>
      <input type="text" placeholder="Enter stock" [formControl]="searchInput">
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

    getStockQuoteFromServer(stock: string) {

        console.log(`The price of ${stock} is ${100*Math.random().toFixed(4)}`);
    }
}
bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
]);*/
