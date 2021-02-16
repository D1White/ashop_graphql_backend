import { Kind, GraphQLError, GraphQLScalarType } from 'graphql';

const URL_REGEXP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\.(jpg|png|jpeg)$/;

const validate = (value) => {
  if (typeof value !== 'string') {
    throw new TypeError(`Value is not string: ${value}`);
  }

  if (!URL_REGEXP.test(value)) {
    throw new TypeError(`Value is not a valid img URL: ${value}`);
  }

  return value;
};

const ImgURL =  new GraphQLScalarType({
  name: 'URL',

  description:
    `A field whose value conforms image URL. RegExp: ^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\.(jpg|png|jpeg)$`,

  serialize(value) {
    return validate(value);
  },

  parseValue(value) {
    return validate(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as URLs but got a: ${ast.kind}`,
      );
    }

    return validate(ast.value);
  },
});

export default ImgURL;