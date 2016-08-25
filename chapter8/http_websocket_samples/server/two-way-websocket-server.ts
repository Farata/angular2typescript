import * as express from "express";
import * as path from "path";
//import * as ws from "ws";
import {Server} from "ws";

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

// HTTP Server
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'client/two-way-websocket-client.html'));
});

const httpServer = app.listen(8000, "localhost", () => {

    const {port} = httpServer.address();

    console.log('HTTP Server is listening on %s', port);
});

// WebSocket Server
var wsServer: Server = new Server({port:8085});

console.log('WebSocket server is listening on port 8085');

wsServer.on('connection',
           websocket => {
               websocket.send('This message was pushed by the WebSocket server');

               websocket.on('message',
                              message => console.log("Server received: %s", message));

           });

// Broadcasting to all clients
/*
wsServer.on('connection',
    websocket => wsServer.clients
        .forEach(
            client =>client.send('This message was pushed by the WebSocket server')));*/
