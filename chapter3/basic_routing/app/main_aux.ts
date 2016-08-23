import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

// This is a non-working app. It used to work in Angular Beta,
// but support of auxiliary routes was removed from Angular RC.1

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
    template: `<div><a [routerLink]="['/']">Home</a>
              <a [routerLink]="['/product']">Product Details</a>
              <a [routerLink]="['/', ['chat']]">Chat</a></div>

              <div>
              <router-outlet></router-outlet>
               <router-outlet name="chat"></router-outlet></div>`,
    directives: [ ROUTER_DIRECTIVES]})
@Routes([
    {path: '/',        component: HomeComponent},
    {path: '/product', component: ProductDetailComponent},
    {aux: '/chat', component: ChatComponent}
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);