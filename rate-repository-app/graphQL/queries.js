import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      cursor
      node {
        createdAt
        description
        forksCount
        language
        name
        id
        fullName
        ownerAvatarUrl
        stargazersCount
        ratingAverage
        ownerName
        reviewCount
        url
      }
    }
  }
}
`;



export const ME = gql` 
query Query {
  me {
    id
    username
  }
}
`
export const SINGLE_REPOSITORIES = gql`
query Query($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`
export const FIND_REPOSITORIES = gql` 
query ($searchKeyword: String) {
  repositories(searchKeyword: $searchKeyword) {
    edges {
      cursor
      node {
        createdAt
        description
        forksCount
        language
        name
        id
        fullName
        ownerAvatarUrl
        stargazersCount
        ratingAverage
        ownerName
        reviewCount
        url
      }
    }
  }
}
`
export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean =true ) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            repositoryId
            text
            rating
            repository {
             createdAt
        description
        forksCount
        language
        name
        id
        fullName
        ownerAvatarUrl
        stargazersCount
        ratingAverage
        ownerName
        reviewCount
        url
            }
          }
        }
        totalCount
      }
    }
  }
`;