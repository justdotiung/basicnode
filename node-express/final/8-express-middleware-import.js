const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
//req => middleware => res
// app.use('/api', logger); 특정경로
app.use([logger, authorize]);

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
