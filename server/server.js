const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
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

  // Once database connection is open, start listening for requests
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at ${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();