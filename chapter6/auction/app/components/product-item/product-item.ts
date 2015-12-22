import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Product} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-item',
  properties: ['product'],
  templateUrl: 'app/components/product-item/product-item.html',
  styleUrls: ['app/components/product-item/product-item.css'],
  directives: [RouterLink, StarsComponent],
})
export default class ProductItemComponent {
  product: Product;
}
