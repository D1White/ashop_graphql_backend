import { gql } from 'apollo-server-express';

const query = gql`
  type Query {
    categories: [Category]!
    category(id: ID!): Category!

    products: [Product]!
  }
`;

export default query;