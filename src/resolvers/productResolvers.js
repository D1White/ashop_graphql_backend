import { ProductModel } from "../models/ProductModel";
import { CategoryModel } from "../models/CategoryModel";

const productResolvers = {
  Query: {
    products: async (_, { filter, orderBy, priceRange, limit, pagination }) => {
      const ORDER_BY_FILTER_MAP = {
        'FULL_NAME_ASC': {full_name: 'asc'},
        'FULL_NAME_DESC': {full_name: 'desc'},
        'PRICE_ACS': {price: 'asc'},
        'PRICE_DESC': {price: 'desc'},
        'POPULARITY': {orderIndex: 'desc'},
     }
     const orderByType = ORDER_BY_FILTER_MAP[orderBy]

      let filterQuery = {};

      for (const key in filter) {
        if (
          key === "name" ||
          key === "full_name" ||
          key === "price" ||
          key === "category"
        ) {
          filterQuery[key] = filter[key];
        } else if (key === "design") {
          filterQuery["design.name"] = filter[key];
        } else {
          filterQuery[`info.${key}`] = filter[key];
        }
      }

      if (priceRange && priceRange.from >= 0 && priceRange.to) {
        filterQuery["price"] = {
          $gte: priceRange.from,
          $lte: priceRange.to,
        };
      }

      // const products = await ProductModel.find(filterQuery, null, {
      //   sort: orderByType,
      //   limit: limit,
      // }).exec();

      let options = {
        sort: orderByType,
      }

      if (pagination) {
        options.page = pagination.page;
        options.limit = pagination.perPage
      }

      const productPagination = await ProductModel.paginate(filterQuery, options);

      const products = productPagination.docs;
      delete productPagination.docs


      return {
        items: products,
        pageInfo: productPagination
      };
    },
    product: (_, { id }) => {
      return ProductModel.findById(id)
    }
  },
  Mutation: {
    product: () => ({}),
  },
  ProductMutations: {
    create: async(_, { product }) => {
      // console.log(arg);
      if (product.category) {
        const category = await CategoryModel.findById(product.category).exec();

        if (!category) {
          throw new TypeError(`Сategory with such id does not exist: ${product.category}`);
        }
      }

      const info = {...product.info}

      const data = {...product, info}

      console.log(data);

      const newProduct = await ProductModel.create(data);

      return newProduct;
    },
  },
};

export default productResolvers;
