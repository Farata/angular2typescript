import {Component} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  properties: ['product'],
  templateUrl: 'app/components/product-item/product-item.html',
  styleUrls: ['app/components/product-item/product-item.css'],
})
export default class ProductItemComponent {
  product: Product;
}
