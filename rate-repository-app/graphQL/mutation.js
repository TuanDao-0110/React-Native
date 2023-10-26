import { gql } from '@apollo/client';

export const SIGN_IN = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
    expiresAt
    user {
      createdAt
      id
      reviewCount
      username
    }
  }
}
`
export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    createdAt
    rating
    text
    repositoryId
  }  
}
`

export const SIGN_UP = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    createdAt
    reviewCount
  }
}
`


export const DELETE_REVIEW = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`