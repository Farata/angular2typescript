import {Component} from 'angular2/angular2';
import StarsComponent from 'app/components/stars/stars';
import {Product} from 'app/services/product-service';

@Component({
  selector: 'auction-product',
  properties: ['product'],
  templateUrl: 'app/components/product/product.html',
  directives: [StarsComponent]
})
export default class ProductComponent {
  product: Product;
}
