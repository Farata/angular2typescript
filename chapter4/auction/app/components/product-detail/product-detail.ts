import {Component} from 'angular2/core';
import { RouteParams} from 'angular2/router';
import {Product, Review, ProductService} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  templateUrl: 'app/components/product-detail/product-detail.html',
  directives: [ StarsComponent]
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  constructor(params: RouteParams, productService: ProductService) {

    let prodId: number = parseInt(params.get('productId'));
    this.product = productService.getProductById(prodId);

    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}