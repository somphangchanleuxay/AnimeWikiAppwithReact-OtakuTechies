const { User, Anime } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    // Query resolvers
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in');
    },
    animes: async () => {
      return Anime.find();
    },
    anime: async (parent, { title }) => {
      return Anime.findOne({ title });
    },
  },

  Mutation: {
    // Existing mutations
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addAnime: async (parent, { title, description, image }) => {
      const anime = await Anime.create({ title, description, image });
      return anime;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user };
    },

    // New updatePassword mutation
    updatePassword: async (parent, { email, oldPassword, newPassword }) => {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // Verify the old password
      const correctPw = await user.isCorrectPassword(oldPassword);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect old password');
      }

      // Update the user's password
      user.password = newPassword;
      await user.save();

      // Generate a new token for the user
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
