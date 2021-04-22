const express = require('express');
const app = express();
const morgan = require('morgan');
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./node-express/methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => console.log('server listen 5000 port'));
