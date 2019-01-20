const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
require('./config/db');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/notes', apiRouter);

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});
