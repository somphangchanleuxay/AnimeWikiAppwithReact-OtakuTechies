const {gql} = require('apollo-server');

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    favorites: [String]
  }

  type Anime {
    _id: ID
    title: String
    description: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    animes: [Anime]
    anime(title: String!): Anime
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addAnime(title: String!, description: String!, image: String): Anime
    login(email: String!, password: String!): Auth
    favAdd(someone: String!, title: String!): User
    favRemove(someone: String!, title: String!): User
  }
`;

module.exports = typeDefs;