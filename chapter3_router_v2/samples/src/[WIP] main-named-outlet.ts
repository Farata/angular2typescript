import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';


@Component({selector: 'page1', template: `Page 1`})
export class Page1Component {}

@Component({selector: 'page2', template: 'Page 2'})
export class Page2Component {}

@Component({selector: 'chat', template: `Chat`})
export class ChatComponent {}

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
      <div>
        <a [routerLink]="['./']">Home</a>
        <a [routerLink]="['./page2']">Product Details</a>
        <a [routerLink]="['./chat']">Chat</a>
      </div>
      <div>
        <router-outlet></router-outlet>
        <router-outlet name="right"></router-outlet>
      </div>
    `
})
@Routes([
    {path: '/',      component: Page1Component},
    {path: '/page2', component: Page2Component},
    {path: '/chat',  component: ChatComponent, outlet: 'right'}
])
class RootComponent{}

bootstrap(RootComponent, [
    ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
