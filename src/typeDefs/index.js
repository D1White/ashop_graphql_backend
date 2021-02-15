import query from './query';
import scalars from './scalars';
import { categoryTypes, productTypes } from './types';


export const typeDefs = [
  query,
  scalars,
  categoryTypes,
  productTypes
];