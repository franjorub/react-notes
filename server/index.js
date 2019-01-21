const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/api');
require('./config/db');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/notes', apiRouter);

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});
