

const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    
    resp.write(JSON.stringify({
        name: 'Aman Kumar',
        email: 'amankumar@123gmail.com'
    }));
    resp.end();
}).listen(8000);

console.log("Server created on port 8000");