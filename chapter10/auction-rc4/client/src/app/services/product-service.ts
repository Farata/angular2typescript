import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export interface ProductSearchParams {
  title: string;
  minPrice: number;
  maxPrice: number;
}

@Injectable()
export class ProductService {
  searchEvent: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) {}

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http
      .get('/api/products', {search: encodeParams(params)})
      .map(response => response.json());
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products')
      .map(response => response.json());
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get(`/api/products/${productId}`)
      .map(response => response.json());
  }

  getReviewsForProduct(productId: number): Observable<Review[]> {
    return this.http
      .get(`/api/products/${productId}/reviews`)
      .map(response => response.json())
      .map(reviews => reviews.map(
        (r: any) => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment)));
  }

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}

/**
 * Encodes the object into a valid query string.
 */
function encodeParams(params: any): URLSearchParams {
  return Object.keys(params)
    .filter(key => params[key])
    .reduce((accum: URLSearchParams, key: string) => {
      accum.append(key, params[key]);
      return accum;
    }, new URLSearchParams());
}
