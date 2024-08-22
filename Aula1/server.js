//Importe 
const http = require('http');
const fileUsers = './users.json';
const fileDocuments = './documents.json';
const fs = require('fs');

const dataUser = fs.readFileSync(fileUsers,'utf-8');
const dataDocument = fs.readFileSync(fileDocuments,'utf-8');


const handleRequest = (request,response) => {
    switch(request.url){
        case '/users':
            response.writeHead(200,{
                'Content-type': 'application/json'
            });
            response.end(dataUser);
            break;
            case '/docs':
                response.writeHead(200,{
                    'Content-type': 'application/json'
                });
                response.end(dataDocument);
                break;
        default:
            response.end('404 Page not found');
    }
}

const server = http.createServer(handleRequest);

const port = 3300;

server.listen(port,() => {
    console.log(`Server running http://localhost:${port}`);
});