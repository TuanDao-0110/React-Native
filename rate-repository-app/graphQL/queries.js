import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories($searchKeyword: String,$first: Int, $after: String)   {
  repositories (first: $first,after: $after,searchKeyword: $searchKeyword)  {
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
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
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
query Query($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    reviews (first: $first, after: $after) {
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
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
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