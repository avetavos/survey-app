const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const questions = require('./routes/question');

const app = express();
const port = 5000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose
  .connect(
    '', // MongoDB URI
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }
  )
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use('/api/questions', questions);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
