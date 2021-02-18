import { gql } from 'apollo-server-express';

const query = gql`
  type Query {
    categories: [Category!]!
    category(id: ID!): Category!

    products(filter: JSONObj, orderBy: Sort, priceRange: PriceRange, pagination: PaginationInput, limit: Int): ProductPagination
    product(id: MongoId!): Product!
  }

  input PriceRange {
    from: Float
    to: Float
  }

  enum Sort {
    FULL_NAME_ASC
    FULL_NAME_DESC
    PRICE_ACS
    PRICE_DESC
    POPULARITY
  }

  input PaginationInput {
    page: Int! = 1
    perPage: Int! = 15
  }
`;

export default query;