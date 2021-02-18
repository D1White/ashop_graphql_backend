import { gql } from "apollo-server-express";

export const productTypes = gql`
  type Product {
    id: ID!
    name: String!
    full_name: String!
    price: Float!
    photo_url: [ImgURL!]!
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
    photo_url: ImgURL!
  }

  type ProductMutations {
    create(product: ProductInput!): Product
  }

  type ProductPagination {
    # Array of objects.
    items: [Product!]!
    # Information to aid in pagination.
    pageInfo: PaginationInfo
  }

  type PaginationInfo {
    totalDocs: Int!
    limit: Int!
    totalPages: Int
    page: Int
    pagingCounter: Int
    hasPrevPage: Boolean!
    hasNextPage: Boolean!
    prevPage: Int
    nextPage: Int
  }

  input ProductInput {
    "Name"
    name: String!
    full_name: String!
    price: Float!
    photo_url: [ImgURL!]!
    category: MongoId!
    design: [DesignInput!]!
    info: JSONObj!
    description: String!
  }

  input DesignInput {
    name: String!
    color: HexColorCode!
    quantity: Int!
    photo_url: ImgURL!
  }
`;
