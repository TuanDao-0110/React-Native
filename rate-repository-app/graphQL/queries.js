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
      }
    }
  }
}
`;


// other queries...



export const GET_ALL_AUTHOR = gql`
query {  allAuthors  { bookCount,born,name}}
`