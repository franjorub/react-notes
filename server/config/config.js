const URI = process.env.NODE_ENV === 'development'
  ? 'mongodb://localhost:27017/notes'
  : 'mongodb://franjorub:112113fr@ds119640.mlab.com:19640/notes';

module.exports = {
  URI,
};
