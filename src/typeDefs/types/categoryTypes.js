import { gql } from 'apollo-server-express'

export const categoryTypes = gql`
  type Mutation {
    createCategory(name: String!, full_name: String!): Category!
    updateCategory(id: ID!, name: String!, full_name: String!): Category!
  }

  type Category {
    id: ID!
    name: String!
    full_name: String!
  }
`;