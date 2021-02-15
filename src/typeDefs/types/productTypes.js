import { gql } from 'apollo-server-express';

export const productTypes = gql`
  type Query {
    products: [Product]!
  }

  type Product {
    name: String!
    full_name: String!
    price: Int!
    photo_url: [String!]!
    category: Category!
    design: [Design!]!
    info: String!
    description: String!
    orderIndex: Int!
  }

  type Design {
    name: String!
    color: String!
    quantity: Int!
    photo_url: String!
  }
`;