const { User, Anime } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (user) {
          const favoriteAnime = await Anime.find({ _id: { $in: user.favorites } });
          return { ...user.toObject(), favorites: favoriteAnime };
        } else {
          throw new AuthenticationError("User not found");
        }
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },
    animes: async () => {
      return Anime.find();
    },
    anime: async (parent, { title }) => {
      return Anime.findOne({ title });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return {
        token,
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
          favorites: [],
        },
      };
    },

    addAnime: async (parent, { title, description, image }) => {
      const anime = await Anime.create({ title, description, image });
      return anime;
    },
    

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid email or password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    favAdd: async (parent, { title }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { favorites: title } },
          { new: true }
        );
        return user.populate('favorites').execPopulate(); // Populate favorites with Anime objects
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },

    favRemove: async (parent, { title }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: title } },
          { new: true }
        );
        return user.populate('favorites').execPopulate(); // Populate favorites with Anime objects
      } else {
        throw new AuthenticationError("You are not authenticated");
      }
    },
  },
};

module.exports = resolvers;
