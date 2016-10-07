import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'home',
    template: `<div class="home">Home Component
               <input type="text" placeholder="Type something here"/> </div>`,
    styles: [`.home {background: red; padding: 15px 0 0 30px;  height: 80px; width:70%;
                    font-size: 30px; float:left; box-sizing:border-box;}`]})
export class HomeComponent {}

@Component({
    selector: 'chat',
    template: `<textarea placeholder="Chat with customer service"
                       class="chat"></textarea>`,
    styles: [`.chat {background: #eee; height: 80px;width:30%; font-size: 24px;
                     float:left; display:block; box-sizing:border-box;} `]})
export class ChatComponent {}

const routes: Routes = [
    {path: '',  redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'chat', component: ChatComponent, outlet:"aux"}
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['']">Home</a>
        <a [routerLink]="[{outlets: {primary: 'home', aux: 'chat'}}]">Open Chat</a>
        <a [routerLink]="[{outlets: {aux: null}}]">Close Chat</a>
        <br/>
        <router-outlet></router-outlet>
        <router-outlet name="aux"></router-outlet>
    `
})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ChatComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);



/*
// programmatic navigation
class AppComponent {

    constructor(private _router: Router){}

    navigateToChat(){
        this._router.navigate([{outlets: {aux: 'chat'}}]);
    }
}*/
