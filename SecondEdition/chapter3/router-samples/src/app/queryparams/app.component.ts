import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/products']" [queryParams]="{category:'sports'}">Sports products</a> 
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
