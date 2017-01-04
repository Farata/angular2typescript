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

        console.log(`The price of ${stock} is ${(100*Math.random()).toFixed(4)}`);
    }
}

@NgModule({
    imports:      [ BrowserModule,  ReactiveFormsModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
