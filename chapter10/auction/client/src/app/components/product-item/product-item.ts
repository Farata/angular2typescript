import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Product} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-item',
  template: require('./product-item.html'),
  styles: [require('./product-item.css')],
  directives: [ROUTER_DIRECTIVES, StarsComponent],
})
export default class ProductItemComponent {
  @Input()
  product: Product;
}
