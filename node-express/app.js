const express = require('express');
const app = express();
const morgan = require('morgan');
let { people } = require('./data');

app.use(express.static('./node-express/methods-public'));
app.use(morgan('tiny'));

app.get('/api/people', (req, res) => {
  console.log(req.user);
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => console.log('server listen 5000 port'));
