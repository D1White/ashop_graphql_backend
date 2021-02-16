import { gql } from 'apollo-server-express'

export const categoryTypes = gql`
  type CategoryMutations {
    create(name: String!, full_name: String!): Category!
    update(id: ID!, name: String!, full_name: String!): Category!
  }

  type Category {
    id: ID!
    name: String!
    full_name: String!
  }
`;