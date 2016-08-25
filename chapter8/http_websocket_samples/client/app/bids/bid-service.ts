import {Observable } from 'rxjs/Rx';
//import {Bid} from 'bid';

export class BidService{

    ws: WebSocket;

    createObservableSocket(url:string):Observable{

        this.ws = new WebSocket(url);

        return new Observable(
          observer => {

            this.ws.onmessage = (event) =>
                      observer.next(event.data);

            this.ws.onerror = (event) => observer.error(event);

            this.ws.onclose = (event) => observer.complete();

        }
     );
    }

    subscribeToBids(subscribe: boolean){

        let action = subscribe? 'subscribe': 'unsubscribe';

        this.ws.send(action);
    }

}