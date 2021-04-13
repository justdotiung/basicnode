const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to hompage');
  }
  if (req.url === '/about') {
    res.end('about page');
  }
  res.end(`<h1>error</h1>
      <a href="/">back to home page</a>
    `);
});

server.listen(5000);
