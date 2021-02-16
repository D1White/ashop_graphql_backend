import { gql } from 'apollo-server-express';

const mutations = gql`
  type Mutation {
    category: CategoryMutations
    product: ProductMutations
  }
`;

export default mutations;