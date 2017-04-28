import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class BidService {
  constructor(private webSocket: WebsocketService) {}

  watchProduct(productId: number): Observable<any> {
    let openSubscriber = Subscriber.create(
        () => this.webSocket.send({productId: productId}));

    return this.webSocket.createObservableSocket('ws://localhost:8000', openSubscriber)
        .map(message => JSON.parse(message));
  }
}
