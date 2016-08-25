import {BidService} from './bid-service';
import {ProductService} from './product-service';
import {WebSocketService} from './websocket-service';

export const ONLINE_AUCTION_SERVICES = [
  BidService,
  ProductService,
  WebSocketService
];
