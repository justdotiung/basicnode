const express = require('express');
const app = express();
const morgan = require('morgan');

//req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  console.log(req.user);
  res.send('home');
});
app.get('/about', (req, res) => {
  res.send('about');
});
app.get('/api/products', (req, res) => {
  res.send('product');
});
app.get('/api/item', (req, res) => {
  res.send('item');
});

app.listen(5000, () => console.log('server listen 5000 port'));
