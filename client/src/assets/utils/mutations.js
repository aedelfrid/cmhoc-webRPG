import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($userData: userInput) {
    signUp(userData: $userData) {
      token
      user {
        _id
        username
      }
    }
  }
`;