const mongoose = require('mongoose');
require('dotenv').config();

// Use a meaningful default connection string if MONGODB_URI is not defined
const defaultURI = 'mongodb://localhost:27017/otaku_db';

mongoose.connect(process.env.MONGODB_URI || defaultURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add other options if needed
});

module.exports = mongoose.connection;
