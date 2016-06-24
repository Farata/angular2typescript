import {Component} from '@angular/core';
import {OnActivate, RouteSegment} from '@angular/router';

@Component({
  selector: 'product-reviews',
  template: `
    <h3>Product Reviews</h3>
    <div>Stars: {{review?.stars}}</div>
    <div>Comment: {{review?.comment}}</div>
  `
})
export class ProductReviewsComponent {
  reviews: any[] = [
    {productId: 1, stars: 4, comment: 'Good'},
    {productId: 2, stars: 5, comment: 'Excellent'},
    {productId: 3, stars: 3, comment: 'Bad'},
    {productId: 4, stars: 4, comment: 'Good'},
    {productId: 5, stars: 5, comment: 'Excellent'}
  ];

  review: any;

  routerOnActivate(currentSegment: RouteSegment) {
    let productId = parseInt(currentSegment.getParam('productId'));
    this.review = this.reviews.find(r => r.productId === productId);
  }
}
