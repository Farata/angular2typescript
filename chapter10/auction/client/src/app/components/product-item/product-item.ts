import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Product } from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  styleUrls: [ 'product-item.css' ],
  templateUrl: 'product-item.html'
})
export default class ProductItemComponent {
  @Input() product: Product;

  imgHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.imgHtml = sanitizer.bypassSecurityTrustHtml(`
      <img src="http://placehold.it/320x150">`);
  }
}
