import {Component, bind} from 'angular2/angular2';
import {ProductService, Product} from "../../services/product-service";

@Component({
  selector: 'di-product-page',
  templateUrl: 'app/components/product/product.html',
  providers:[ProductService]
})

export default class ProductComponent {
  product: Product;

  constructor( productService: ProductService) {

    this.product = productService.getProduct();
  }
}
