import { CategoryModel } from '../models/CategoryModel';

const categoryResolvers = {
  Query: {
    categories: () => CategoryModel.find(),
    category: (_, { id }) => {
      return CategoryModel.findById(id).exec();
    }
  },
  Mutation: {
    createCategory: async(_, { name, full_name }) => {
      const category = await CategoryModel.create({
        name: name,
        full_name: full_name
      });
      return category;
    }
  }
}

export default categoryResolvers;