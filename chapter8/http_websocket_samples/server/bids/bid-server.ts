import * as express from "express";
import * as path from "path";
//import * as ws from "ws";
import {Server} from "ws";
import {Bid} from './bid'

const app = express();

app.use('/', express.static(path.join(__dirname,  '../../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));

// HTTP Server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  '../../client/bid_client.html'));
});

const httpServer = app.listen(8000, "localhost", () => {

    const {port} = httpServer.address();

    console.log('HTTP Server is listening on %s', port);
});

// WebSocket Server
let wsServer: Server = new Server({port:8085});

console.log('BidServer is listening on port 8085');

const OPEN = 1; // The ready state of WebSocket

let bidInterval = setInterval(()=>{
    var latestBid = generateBid();

    broadcast(latestBid);
}, 1000);

let subscribers = [];

wsServer.on('connection',
           websocket => {
               websocket.on('message',
                      message => {
                          console.log("client sent %s", message);

                          if (message== "subscribe"){
                              subscribers.push(websocket);
                          } else if (message == "unsubscribe"){
                              // remove this client from subscribers
                              subscribers.splice(subscribers.indexOf(websocket), 1);
                          }
                      });
           });

function generateBid (): string {
   let bid: Bid = new Bid();
   bid.amount = Math.random()*100;
   bid.bidTime = new Date();
   return JSON.stringify(bid);
}

 function broadcast(bid: string){
    //wsServer.clients
        subscribers
        .forEach(client => {
            if (client.readyState == OPEN) {
                client.send(bid);
            } else{
                // client disconnected - remove it from subscribers
                subscribers.splice(subscribers.indexOf(client), 1);
            }
          }
        );
}