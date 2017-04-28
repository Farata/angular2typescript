import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" placeholder="Enter stock (e.g. AAPL)"  (change)="onInputEvent($event)">
    <br/>
    <order-processor [stockSymbol]="stock" quantity="100"></order-processor>
  `
})
export class AppComponent {
  stock:string;

  onInputEvent({target}):void{
    this.stock=target.value;
  }
}
