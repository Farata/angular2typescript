import {Component} from 'angular2/core';
import {NgClass, NgFor} from 'angular2/common';
import {RouteParams, OnDeactivate} from 'angular2/router';
import {Subscription} from 'rxjs/Subscription';

import {Product, Review, ProductService} from '../../services/product-service';
import {BidService} from '../../services/bid-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  template: require('./product-detail.html'),
  directives: [NgClass, NgFor, StarsComponent]
})
export default class ProductDetailComponent implements OnDeactivate {
  product: Product;
  reviews: Review[];

  currentBid: number;
  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;
  isWatching: boolean = false;

  private subscription: Subscription;

  constructor(
      params: RouteParams,
      productService: ProductService,
      private bidService: BidService) {

    const productId = parseInt(params.get('productId'));

    productService
      .getProductById(productId)
      .subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        },
        error => console.error(error));

    productService
      .getReviewsForProduct(productId)
      .subscribe(
        reviews => this.reviews = reviews,
        error => console.error(error));
  }

  toggleWatchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.isWatching = false;
    } else {
      this.isWatching = true;
      this.subscription = this.bidService.watchProduct(this.product.id)
        .subscribe(
          products => this.currentBid = products.find((p: any) => p.productId === this.product.id).bid,
          error => console.log(error));
    }
  }

  routerOnDeactivate(): any {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
      this.newRating, this.newComment);
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
