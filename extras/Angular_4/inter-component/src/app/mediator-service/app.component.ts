import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="main">
              <search></search>
              <p>
              
              <a [routerLink]="['/']">eBay</a>
              <a [routerLink]="['/amazon']">Amazon</a>
              <router-outlet></router-outlet>
              </div>`,
  styles: ['.main {background: yellow}']
})

export class AppComponent{
}
