import {Component} from '@angular/core';
import {RouteSegment} from '@angular/router';
import {Product, Review, ProductService} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  templateUrl: 'app/components/product-detail/product-detail.html',
  directives: [StarsComponent]
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  constructor(params: RouteSegment, productService: ProductService) {

    let prodId: number = parseInt(params.getParam('productId'));
    this.product = productService.getProductById(prodId);

    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}