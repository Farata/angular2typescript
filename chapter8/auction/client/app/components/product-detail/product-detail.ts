import {Component, OnDestroy} from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Product, Review, ProductService} from '../../services/product-service';
import {BidService} from '../../services/bid-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  templateUrl: 'app/components/product-detail/product-detail.html',
  directives: [NgClass, StarsComponent]
})
export default class ProductDetailComponent implements OnDestroy {
  product: Product;
  reviews: Review[];

  currentBid: number;
  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;
  isWatching: boolean = false;

  private subscription: Subscription;

  constructor(
      route: ActivatedRoute,
      productService: ProductService,
      private bidService: BidService) {

    const productId = parseInt(route.snapshot.params['productId']);

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

/* add a router guard to unsubscribe on deactivate*/

  ngOnDestroy(): any {
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
