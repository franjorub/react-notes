const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('./config/db');

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}

app.use(express.static('public'));

app.use(express.json());

app.options('*', cors());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/notes', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
