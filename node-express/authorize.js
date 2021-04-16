const authorize = (req, res, next) => {
  console.log('author');
  const { name } = req.query;
  if (name === 'john') {
    req.user = { name: 'john', id: 1 };
    return next();
  }
  res.status(401).send('not found');
};

module.exports = authorize;
