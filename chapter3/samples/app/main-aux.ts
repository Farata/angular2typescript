import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'product',
    template: '<h1 >Product Detail Component</h1>'})
export class ProductDetailComponent {}

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
    styles: [`.chat {background: #eee; height: 80px;width:30%; font-size: 30px;
                     float:left; display:block; box-sizing:border-box;} `]})
export class ChatComponent {}


@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['']">Home</a>
        <a [routerLink]="['product']">Product Details</a>
        <a href="javascript:void(0)" (click)="goToChat()">Chat</a>
        <input type="button" value ="Chat" (click)="goToChat()">
        <br/>
        <router-outlet></router-outlet>
        <router-outlet name="aux"></router-outlet>
    `
})
class RootComponent {

    constructor(private router: Router){

    }

    goToChat(){
        this.router.navigateByUrl("home(aux:chat)");
    }

}

bootstrap(RootComponent, [
    provideRouter([
      {path: '',  redirectTo: 'home', terminal:true},
      {path: 'home',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent},
      {path: 'chat', component: ChatComponent, outlet:"aux"}

    ]),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
