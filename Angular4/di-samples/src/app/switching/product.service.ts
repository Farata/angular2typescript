import {Product} from "./product"

export class ProductService {
  getProduct(): Product {
    // Code making an HTTP request to get actual product details could go here
    return new Product('iPhone 7');
  }
}
