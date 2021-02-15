import { GraphQLScalarType, GraphQLError, Kind } from 'graphql';
import { isValidObjectId } from '../utils/isValidObjectId';

const validate = (value) => {
  if(!isValidObjectId(value)) {
    throw new TypeError(`Value is not a valid MongoDB id: ${value}`);
  }
  return value;
}

const MongoId = new GraphQLScalarType({
  name: 'MongoId',
  description: 'Correct MongoDB id',

  serialize(value) {
    return validate(value);
  },

  parseValue(value) {
    return validate(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as mongoDB id but got a: ${ast.kind}`,
      );
    }

    return validate(ast.value);
  },
});

export default MongoId;