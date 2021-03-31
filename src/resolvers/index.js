import categoryResolvers from './categoryResolvers'
import productResolvers from './productResolvers'
import promoResolvers from './promo.resolvers'
import { scalars } from '../scalars'

export const resolvers = [scalars, categoryResolvers, productResolvers, promoResolvers]
