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
    create(product: CreateProductInput!): Product!
    update(id: MongoId!, product: UpdateProductInput!): ProductUpdate
    delete(id: MongoId!): String!
  }

  type ProductUpdate {
    product: Product
    status: String
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

  input CreateProductInput {
    name: String!
    full_name: String!
    price: Float!
    photo_url: [ImgURL!]!
    category: MongoId!
    design: [CreateDesignInput!]!
    info: JSONObj!
    description: String!
  }

  input CreateDesignInput {
    name: String!
    color: HexColorCode!
    quantity: Int!
    photo_url: ImgURL!
  }

  input UpdateProductInput {
    name: String
    full_name: String
    price: Float
    photo_url: [ImgURL]
    category: MongoId
    design: [CreateDesignInput!]
    info: JSONObj
    description: String
  }
`;
