const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));

  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let searchProducts = [...products];
  if (search) {
    searchProducts = searchProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    searchProducts = searchProducts.slice(0, Number(limit));
  }
  if (searchProducts.length < 1) {
    //조건문에서 리턴을 header를 셋하지 못한다.
    return res.status(200).send('not found');
  }
  res.status(200).json(searchProducts);
});

app.listen(5000, () => console.log('server listen 5000 port'));
