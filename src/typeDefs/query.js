import { gql } from 'apollo-server-express';

const query = gql`
  type Query {
    categories: [Category!]!
    category(id: ID!): Category!

    products(filter: JSONObj, orderBy: SortInput, priceRange: PriceRange, limit: Int): [Product!]!
  }

  input PriceRange {
    from: Float
    to: Float
  }

  input SortInput {
    full_name: Sort
    price: Sort
  }

  enum Sort {
    ASC
    DESC
  }
`;

export default query;