import * as http from 'http';

const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"message": "Hello Json!"}\n');
});

const port = 8000;

server.listen(port);
console.log('Listening on http://localhost:' + port);