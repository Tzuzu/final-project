const { gql } = require('apollo-server-express');
const { User, Recipe } = require('../models');

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

    type UserInput {
        username: String
        email: String
        password: String
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

    type Query {
        recipes: [Recipe]
        recipe(id: ID): Recipe
        user(username: String): User
        users: [User]
    }

    type Mutation {
        createUser(username: String, email: String, password: String): User
        login(email: String, password: String): AuthPayload
        createRecipe(input: RecipeInput): Recipe
        saveRecipe(userId: ID, recipeId: ID): Recipe
    }
`;

module.exports = typeDefs;