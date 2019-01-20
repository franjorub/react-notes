const mongoose = require('mongoose');
const config = require('./config');

class DataBase {
  constructor() {
    this.connect();
  }

  // eslint-disable-next-line class-methods-use-this
  connect() {
    mongoose
      .connect(
        config.URI,
        { useNewUrlParser: true },
      )
      .then(() => {
        console.log('connected to the db');
      })
      .catch(err => console.err('error: ', err));
  }
}

module.exports = new DataBase();
