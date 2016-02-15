import {Component, Pipe, PipeTransform} from 'angular2/core';
import {NgFor, Control, NgFormControl} from 'angular2/common';
import {Product, ProductService} from 'app/services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';
import {ProductService} from '../../services/product-service';
import {FilterPipe} from '../pipes/filter-pipe'
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'auction-home-page',
  directives: [
    NgFor,
    NgFormControl,
    CarouselComponent,
    ProductItemComponent
  ],
  pipes: [FilterPipe],
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input placeholder="Filter products by title"
                 class="form-control" type="text"
                 [ngFormControl]="titleFilter">
        </div>
      </div>
    </div>
    <div class="row">
      <div *ngFor="#product of products | filter:'title':filterCriteria" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [product]="product"></auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Product[] = [];
  titleFilter: Control = new Control();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
      .debounceTime(100)
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error));
  }
}