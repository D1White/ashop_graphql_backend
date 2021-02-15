import dotenv from 'dotenv';
dotenv.config();

import './core/db'

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const app = express();

app.use(cors());
app.use(express.json());


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use((_, res) => {
  res.status(200).send('Weg store GraphQL backend');
});

app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
)