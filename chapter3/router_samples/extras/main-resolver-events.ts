import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule, Component}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from "./resolver_events/home";
import {DataComponent} from "./resolver_events/data.component";
import {DataResolver} from "./resolver_events/data-resolver";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, RouterModule, Router, NavigationStart, NavigationEnd} from "@angular/router";
import {DataService} from "./resolver_events/data-service";
import {HttpModule} from "@angular/http";

import { MaterialModule } from '@angular/material';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'mydata', component: DataComponent,
       resolve:{
         mydata: DataResolver
       }
    }
];

@Component({
    selector: 'app',
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

        if (event instanceof NavigationEnd){
            this.navigating=false;
            console.log("Navigation ended");
        }
    }
}


@NgModule({
    imports:      [ BrowserModule, HttpModule,
                    MaterialModule.forRoot(),
                    RouterModule.forRoot(routes) ],
    declarations: [ AppComponent, HomeComponent, DataComponent],
    providers:[DataService, DataResolver,
              {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

