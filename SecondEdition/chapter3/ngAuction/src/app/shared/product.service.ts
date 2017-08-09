export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
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

export class ProductService {
  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
}

const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 74.99,
    'rating': 4.2,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Fourth Product',
    'price': 84.99,
    'rating': 3.9,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Fifth Product',
    'price': 94.99,
    'rating': 5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Sixth Product',
    'price': 54.99,
    'rating': 4.6,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
];
