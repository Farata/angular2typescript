import {Component, Input} from 'angular2/core';
import StarsComponent from 'app/components/stars/stars';
import {Product} from 'app/services/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: 'app/components/product-item/product-item.html',
  directives: [StarsComponent]
})
export default class ProductItemComponent {
  @Input() product: Product;
}
