import { gql } from '@apollo/client';
export const QUERY_RECIPES = gql`
query getRecipes {
    recipes {
      _id
      image
      ingredients
      name
      instructions
      type
    }
  }
`;