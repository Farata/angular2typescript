import {Component, Input} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';
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

  imgHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizationService) {
    this.imgHtml = sanitizer.bypassSecurityTrustHtml(`
      <img src="http://placehold.it/320x150">`);
  }
}
