const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://datauser:superSecure@cluster0.athnlz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
