import categoryResolvers from './categoryResolvers';
import productResolvers from './productResolvers';
import { scalars } from '../scalars'

export const resolvers = [scalars, categoryResolvers, productResolvers];