import {ProductService} from "./product.service";
import {Product} from "./product";

export class MockProductService implements ProductService {
  getProduct(): Product {
    return new Product('Samsung 7');
  }
}
