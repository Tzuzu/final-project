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
            console.log("in recipe Query");
            return await Recipe.findById(_id);
        },
        users: async () => {
            console.log("in Users Query");
            const users = await User.find();
            console.log(users);
            return users;
            },
        user: async (parent, { _id }) => {
            return await User.findById(_id).populate(`cookBooks`);
        },
    },
    Mutation: {
        createRecipe: async (parent, { input }) => {
            return await Recipe.create(input);
        },
       
        saveRecipe: async (parent, { _id }, context) => {
            console.log(_id);
            if (context.user) {
            const updatedUser = await User.findByIdAndUpdate({_id : context.user._id} , { $push: { cookBooks: _id } }, { new: true });
            console.log(updatedUser);
            return updatedUser.populate(`cookBooks`);
            } 
            throw new AuthenticationError ('You must be logged in to save a recipe');
        },

        createUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            console.log(user);
            const token = signToken(user);
            return { token, user };
        },
    
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.comparePassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            console.log(`tokenInLoginResolver`, token)
            return { token, user };
          }
    },
};

module.exports = resolvers;