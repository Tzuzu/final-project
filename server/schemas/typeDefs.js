const { gql } = require('apollo-server-express');
const { User, Recipe } = require('../models');

const typeDefs = gql`
    type Recipe {
        _id: ID
        name: String
        ingredients: [String]
        instructions: [String]
        type: String
        image: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        cookBooks: [Recipe]
    }

    input RecipeInput {
        name: String
        ingredients: [String]
        instructions: [String]
        type: String
        image: String
    }  
    
    type AuthPayload {
        token: ID
        user: User
    }

    type Query {
        recipes: [Recipe]
        recipe(_id: ID!): Recipe
        user(_id: String): User
        users: [User]
    }

    type Mutation {
        createUser(username: String, email: String, password: String): AuthPayload
        login(email: String, password: String): AuthPayload
        createRecipe(input: RecipeInput): Recipe
        saveRecipe(_id: ID!): User
    }
`;

module.exports = typeDefs;