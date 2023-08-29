const { gql } = require('apollo-server-express');
const { Recipe } = require('../models');

const typeDefs = gql`
    type Recipe {
        _id: ID
        name: String
        ingredients: [String]
        instructions: [String]
        rating: Float
    }

    type User {
        _id: ID
        username: String
        email: String
    }
    type Query {
        recipes: [Recipe]
        recipe(id: ID): Recipe
    }

    type Mutation {
        createUser(username: String, email: String, password: String): User
        loginUser(email: String, password: String): AuthPayload
        createRecipe(input: RecipeInput): Recipe
        saveRecipe(userId: ID, recipeId: ID): Recipe
    }

    input RecipeInput {
        name: String
        ingredients: [String]
        instructions: [String]
    }  
    
    type AuthPayload {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;