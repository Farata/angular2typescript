import {Component} from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['mydata']">Data</a>
        <router-outlet></router-outlet>
        <div *ngIf="navigating">
            Loading...              
            <md-progress-bar mode="indeterminate"></md-progress-bar>
        </div>
    `
})
export class AppComponent {

  navigating: boolean = false;

  constructor (private router: Router){
    this.router.events.subscribe(
      (event) => this.eventLogger(event)
    );
  }

  eventLogger(event){
    if (event instanceof NavigationStart){
      this.navigating=true;
      console.log("Navigation started");
    }

    if (event instanceof NavigationEnd ||
      event instanceof NavigationError || event instanceof NavigationCancel){
      this.navigating=false;
      console.log("Navigation ended");
    }
  }
}
