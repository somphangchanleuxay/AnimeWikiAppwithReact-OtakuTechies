// const express = require('express');
// const mongoose = require('mongoose');
// const PORT = process.env.PORT || 3000;
// const app = express();
// const path = require('path');

// // Set up your routes, middleware, and other configurations here
// app.use(express.static(path.join(__dirname, '../client/public')));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Function to start the Apollo Server
const startApolloServer = async () => {
  await server.start();

  // Parse incoming requests with JSON payloads
  app.use(express.json());
  // Parse URL-encoded bodies for form submissions
  app.use(express.urlencoded({ extended: false }));

  // Middleware for token authentication
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from the 'client/dist' directory
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Serve index.html for all other routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));

    });
  }

  let useURL = "http://localhost";

  // Once database connection is open, start listening for requests
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at ${useURL}:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();