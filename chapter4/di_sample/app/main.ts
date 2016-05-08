import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import ProductComponent from './components/product';

@Component({selector: 'disample-root',
    template: `<h1> Basic Dependency Injection Sample</h1>
             <di-product-page></di-product-page>`,
    directives: [ProductComponent]
})
class RootComponent {}

bootstrap(RootComponent);