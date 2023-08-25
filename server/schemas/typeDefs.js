const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Recipe {
        _id: ID
        name: String
        ingredients: [String]
        instructions: [String]
        rating: Float
    }
    type Query {
        recipes: [Recipe]
        recipe(id: ID): Recipe
    }

    type Mutation {
        createRecipe(input: RecipeInput): Recipe
    }

    input RecipeInput {
        name: String
        ingredients: [String]
        instructions: [String]
    }
`;

module.exports = typeDefs