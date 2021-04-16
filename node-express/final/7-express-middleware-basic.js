const express = require('express');
const app = express();

//req => middleware => res

const logger = (req, res, next) => {
  const { method, url } = req;
  const year = new Date().getFullYear();

  console.log(method, url, year);
  next();
};

app.get('/', logger, (req, res) => {
  res.send('home');
});
app.get('/about', logger, (req, res) => {
  res.send('about');
});

app.listen(5000, () => console.log('server listen 5000 port'));
