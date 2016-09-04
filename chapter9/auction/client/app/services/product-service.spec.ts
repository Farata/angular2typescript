import {Injector} from '@angular/core';
import {async, getTestBed, TestBed, inject} from '@angular/core/testing';
import {Response, ResponseOptions, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ProductService} from './product-service';

describe('ProductService', () => {
  let mockBackend: MockBackend;
  let service: ProductService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        ProductService
      ]
    });
    injector = getTestBed();
  });

  beforeEach(inject([XHRBackend, ProductService], (_mockBackend, _service) => {
    mockBackend = _mockBackend;
    service = _service;
  }));

  it('getProductById() should return Product with ID=1', async(() => {
    let mockProduct = {id: 1};
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOpts = new ResponseOptions({body: JSON.stringify(mockProduct)});
      connection.mockRespond(new Response(responseOpts));
    });

    service.getProductById(1).subscribe(p => {
      expect(p.id).toBe(1);
    });
  }));
});
