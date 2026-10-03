const express = require('express');
const app = express();
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
});
app.get('/new', (req, res) => {
  res.render('new', {});
});

app.use(express.static(assetsPath));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Mini Message Board app - listening on port ${PORT}!`);
});
