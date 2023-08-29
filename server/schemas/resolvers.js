const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        recipes: async () => {
            return await Recipe.find();
        },
    // really using parent as a filler for now
        recipe: async (parent, { _id }) => {
            return await Recipe.findById(_id);
        },
        users: async () => {
            return await User.find();
            },
        user: async (parent, { _id }) => {
            return await User.findById(_id);
        },
    },
    Mutation: {
        createRecipe: async (parent, { recipe }) => {
            return await Recipe.create(input);
        },
        updateRecipe: async (parent, args, context) => {
            const recipe = await Recipe.findByIdAndUpdate(args._id, args, { new: true });
            return recipe;
        },
        saveRecipe: async (parent, { _id }, context) => {
            const recipe = await Recipe.findByIdAndUpdate(_id, { $set: { saved: true } }, { new: true });
            return recipe;
        },

        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
    
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
    },
};

module.exports = resolvers;