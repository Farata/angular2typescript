import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';

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
    template: `<div><a [routerLink]="['/Home']">Home</a>
              <a [routerLink]="['/ProductDetail']">Product Details</a>
              <a [routerLink]="['./Home', ['Chat']]">Chat</a></div>

              <div>
              <router-outlet></router-outlet>
               <router-outlet name="chat"></router-outlet></div>`,
    directives: [ ROUTER_DIRECTIVES]})
@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'  },
    {aux: '/chat', component: ChatComponent, as: 'Chat'}
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);