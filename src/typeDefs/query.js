import { gql } from 'apollo-server-express';

export const query = gql`
  type Query {
    categories: [Category]!
    category(id: ID!): Category!
  }
`;