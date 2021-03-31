import { ProductModel } from '../models/ProductModel'

const promoResolvers = {
  Query: {
    promo: async () => {
      const novetly = await ProductModel.find({}).sort({ _id: -1 }).limit(4).exec()
      const top_sales = await ProductModel.find({}).sort({ orderIndex: -1 }).limit(4).exec()

      return {
        novetly,
        top_sales,
      }
    },
  },
}

export default promoResolvers
