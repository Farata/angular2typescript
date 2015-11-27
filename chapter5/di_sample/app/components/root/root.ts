import {Component} from 'angular2/angular2';
import ProductComponent from '../product/product';

@Component({selector: 'disample-root',
  template: `<h1> Basic Dependency Injection Sample</h1>
             <di-product-page></di-product-page>`,
  directives: [ProductComponent]
})
export default class RootComponent {}
