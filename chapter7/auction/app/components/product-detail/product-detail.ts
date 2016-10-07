import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../services/product-service';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  templateUrl: 'app/components/product-detail/product-detail.html'
})
export default class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;
  reviews: Review[];

  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;

  constructor(private productService: ProductService, route: ActivatedRoute) {
    this.productId = parseInt(route.snapshot.params['productId']);
  }

  ngOnInit() {
    this.product = this.productService.getProductById(this.productId);
    this.reviews = this.productService.getReviewsForProduct(this.product.id);
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
