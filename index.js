const http = require('http');

// http.createServer((aman)=>{

    // resp.write("<h1>Hello this is aman kumar</h1>");
    // resp.end();

// }).listen(4000);

const colors = require('colors');

console.log("package.json".green)

const aman = (req,resp)=>{

      resp.write("<h1>Hello heuuu this is aman kumar</h1>");
      resp.end();
}
const aman1 = (req,resp)=>{

      resp.write("<h1>Hello heuuu this is aman kumar</h1>");
      resp.end();
}
http.createServer(aman).listen(4000);

console.log("serveer is started on 4000")
console.log("serveer is started on 4000")
console.log("serveer is started on 4000")
console.log("serveer ison 4000")