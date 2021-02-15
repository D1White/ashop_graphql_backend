import { ProductModel } from '../models/ProductModel';

const productResolvers = {
  Query: {
    products: () => ProductModel.find(),
  },
}

export default productResolvers;