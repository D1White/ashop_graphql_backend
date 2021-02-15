import { gql } from 'apollo-server-express';

export const productTypes = gql`
  type Product {
    name: String!
    full_name: String!
    price: Int!
    photo_url: [URL!]!
    category: Category!
    design: [Design!]!
    info: String!
    description: String!
    orderIndex: Int!
  }

  type Design {
    name: String!
    color: HexColorCode!
    quantity: Int!
    photo_url: URL!
  }
`;