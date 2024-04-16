const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
<<<<<<< HEAD
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

=======
  authMiddleware({ req }) {
    
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
>>>>>>> 9a0316f0adfafde00483e2cfe46398a51d04c51b
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

<<<<<<< HEAD
    try {
      const { authenticatedPerson } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = authenticatedPerson;
    } catch {
=======
    // if it does see one, itll try to verify
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.error(err);
>>>>>>> 9a0316f0adfafde00483e2cfe46398a51d04c51b
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration });
=======


  signToken({ firstName, email, _id }) {

    const payload = { firstName, email, _id };

    // The secret is used to "sign" the token
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
>>>>>>> 9a0316f0adfafde00483e2cfe46398a51d04c51b
  },
};
