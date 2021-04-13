const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   console.log('user hit the resource');
//   res.status(200).sendFile(path.resolve(__dirname, 'navbar-app/index.html'));
//   adding to staic assets
//   SSR
// });

app.get('/about', (req, res) => {
  res.status(200).send('about Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => console.log('listen 5000 port'));

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
