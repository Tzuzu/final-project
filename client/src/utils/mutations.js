import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

export const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

export const SAVE_RECIPE = gql`
mutation saveRecipe($id: ID!) {
  saveRecipe(_id: $id) {
    _id
    cookBooks {
      _id
      name
      image
      ingredients
      instructions
      type
    }
    username
    email
  }
}
`;

export const CREATE_RECIPE = gql`
mutation createRecipe($input: RecipeInput) {
  createRecipe(input: $input) {
    _id
    name
    image
    ingredients
    instructions
    type
  }
}
`