const express = require('express');
const app = express();
const morgan = require('morgan');
let { people } = require('./data');

app.use(express.static('./node-express/methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/people', (req, res) => {
  console.log(req.user);
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: 'please enter name' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(404).send('please your name enter');
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  people = people.map((person) =>
    person.id === Number(id) ? { ...person, name } : person
  );
  res.json({ success: 'true', data: people });
});

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;

  people = people.filter((person) => person.id !== Number(id));

  res.json({ success: true, data: people });
});
app.listen(5000, () => console.log('server listen 5000 port'));
