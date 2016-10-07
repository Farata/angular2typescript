import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import {BidService} from "./bid-service";
import {Bid} from "./bid";

@Component({
  selector: 'subscriber',
  providers: [ BidService ],
  template: `<h1>Product bids</h1>
             <h3>Status: {{status}}</h3>

              <button (click)="toggleBidSubscription()">Toggle subscription to bid notifications</button><br>
              Last bid: {{newBid?.amount | number:'1.1-2'}} <br>
              Bid time: {{newBid?.bidTime | date: 'medium'}}
  `})
class BidComponent {

  newBid: Bid;
  subscribeToNotifications:boolean = false;
  status: string = "unsubscribed";

  constructor(private wsService: BidService) {

      this.wsService.createObservableSocket("ws://localhost:8085")
        .map(res => JSON.parse(res))
        .subscribe(
            data => {

              this.newBid = data;
              this.newBid.bidTime= Date.parse(data.bidTime);
                console.log(this.newBid);
            },
            err => console.log( err),
            () =>  console.log( 'The bid stream is complete')
        );
  }

    toggleBidSubscription(){
            this.subscribeToNotifications = !this.subscribeToNotifications;

            this.wsService.subscribeToBids(this.subscribeToNotifications);

            this.status =  this.subscribeToNotifications? "subscribed": "unsubscribed";

    }
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ BidComponent],
    bootstrap:    [ BidComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
