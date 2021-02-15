import { gql } from 'apollo-server-express';

const scalars = gql`
  scalar HexColorCode
  scalar URL
  scalar JSONObj
  scalar MongoId
`;

export default scalars;