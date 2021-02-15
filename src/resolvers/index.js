import categoryResolvers from './categoryResolvers';
import productResolvers from './productResolvers';
import { scalars } from '../scalars'

// console.log(scalars);

export const resolvers = [scalars, categoryResolvers, productResolvers];

// console.log(resolvers);