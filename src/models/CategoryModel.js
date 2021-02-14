import {model, Schema} from 'mongoose';

const CategorySchema = new Schema({
  name: {
    required: true,
    unique: true,
    type: String,
  },
  full_name: {
    required: true,
    unique: true,
    type: String,
  },
});

export const CategoryModel = model('Category', CategorySchema);