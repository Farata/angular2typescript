import {
  it,
  inject,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {Http, BaseRequestOptions, Response, ResponseOptions} from 'angular2/http'
import {MockBackend, MockConnection} from 'angular2/http/testing'

import {ProductService} from './product-service';

describe('ProductService', () => {
  let mockBackend: MockBackend;
  let service: ProductService;

  beforeEachProviders(() => [
    ProductService,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  beforeEach(inject([MockBackend, ProductService], (_mockBackend, _service) => {
    mockBackend = _mockBackend;
    service = _service;
  }));

  it('getProductById() should return Product with ID=1', done => {
    let mockProduct = {id: 1};
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOpts = new ResponseOptions({body: JSON.stringify(mockProduct)});
      connection.mockRespond(new Response(responseOpts));
    });

    service.getProductById(1).subscribe(p => {
      expect(p.id).toBe(1);
      done();
    });
  });
});
