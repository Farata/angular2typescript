export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string) {
  }
}

export class ProductService {
  getProduct(): Product {
    return new Product( 0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
  }
}




