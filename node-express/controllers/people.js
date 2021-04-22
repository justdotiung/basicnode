let { people } = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: 'please enter name' });
  }
  res.status(201).json({ success: true, person: name });
};

const editPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  people = people.map((person) =>
    person.id === Number(id) ? { ...person, name } : person
  );
  res.json({ success: 'true', data: people });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  people = people.filter((person) => person.id !== Number(id));

  res.json({ success: true, data: people });
};

module.exports = {
  getPeople,
  createPerson,
  editPerson,
  deletePerson,
};
