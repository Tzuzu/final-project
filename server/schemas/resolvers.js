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
    },
    Mutation: {
        createRecipe: async (parent, { recipe }) => {
            return await Recipe.create(input);
        },
    },
};

module.exports = resolvers;