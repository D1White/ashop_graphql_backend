import { ProductModel } from "../models/ProductModel";

const productResolvers = {
  Query: {
    products: (_, { filter, orderBy, priceRange, limit }) => {
      let filterQuery = {};

      for (const key in filter) {
        if (
          key === "name" ||
          key === "full_name" ||
          key === "price" ||
          key === "category"
        ) {
          filterQuery[key] = filter[key];
        } else if (key === 'design') {
          filterQuery['design.name'] = filter[key];
        } else {
          filterQuery[`info.${key}`] = filter[key];
        }
      }
      
      if (priceRange && priceRange.from >= 0 && priceRange.to) {
        filterQuery['price'] = {
          $gte: priceRange.from,
          $lte: priceRange.to,
        }
      }

      return ProductModel.find(filterQuery, null, { sort: orderBy, limit: limit });
    },
  },
};

export default productResolvers;
