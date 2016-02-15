import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouterLink, RouteParams} from 'angular2/router';
import {Product, Review, ProductService} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  templateUrl: 'app/components/product-detail/product-detail.html',
  directives: [NgFor, RouterLink, StarsComponent]
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  constructor(params: RouteParams, productService: ProductService) {
    this.product = productService
        .getProducts()
        .find(p => p.id === parseInt(params.get('productId')));

    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}