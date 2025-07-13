// Load the 'http' module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello, this is a basic Node.js server!\n');
});

// Define port number
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

console.log("amannarekjjkdfgjkdfngkjkjg")