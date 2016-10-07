import {Injectable} from '@angular/core';
import {WebSocketService} from './websocket-service';
import {Observable, Subscriber} from 'rxjs/Rx';

@Injectable()
export class BidService {
  constructor(private webSocket: WebSocketService) {}

  watchProduct(productId: number): Observable {
    let openSubscriber = Subscriber.create(
      () => this.webSocket.send({productId: productId}));

    return this.webSocket.createObservableSocket('ws://localhost:8000', openSubscriber)
      .map(message => JSON.parse(message));
  }
}
