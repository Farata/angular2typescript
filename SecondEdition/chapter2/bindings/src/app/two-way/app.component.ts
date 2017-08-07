import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  template: `
        <input type='text'
               placeholder="Enter shipping address"
               [(ngModel)]="shippingAddress">

        <button (click)="shippingAddress='123 Main Street'">Set Default Address</button>
        <p>The shipping address is {{ shippingAddress }}</p>
    `
})
export class AppComponent {
  shippingAddress: string;
}
