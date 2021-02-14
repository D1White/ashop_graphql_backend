import { body } from 'express-validator';

export const createCategoryValidations = [
  body("name", "Введите короткое имя категории")
  .isString()
  .isLength({
    min: 2,
    max: 25
  })
  .withMessage("Допустимое кол-во символов в коротком названии от 2 до 25"),
  body("full_name", "Введите полное имя категории")
  .isString()
  .isLength({
    min: 2,
    max: 50
  })
  .withMessage("Допустимое кол-во символов в полном названии от 2 до 50"),
]