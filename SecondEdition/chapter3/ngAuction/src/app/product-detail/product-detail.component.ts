import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId']);
    this.product = this.productService.getProductById(prodId);
  }
}
