import { gql } from 'apollo-server-express';

const scalars = gql`
  scalar HexColorCode
  scalar ImgURL
  scalar JSONObj
  scalar MongoId
`;

export default scalars;