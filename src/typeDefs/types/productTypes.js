import { gql } from "apollo-server-express";

export const productTypes = gql`
  type Product {
    id: ID!
    name: String!
    full_name: String!
    price: Float!
    photo_url: [URL!]!
    category: MongoId!
    design: [Design!]!
    info: JSONObj!
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
