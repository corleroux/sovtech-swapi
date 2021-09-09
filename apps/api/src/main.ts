import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { schema } from './sw-schema';

const http = require('http');

async function startApolloServer(schema) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({ schema });
  await server.start();

  server.applyMiddleware({ app });
  const port = process.env.port || 3333;
  await new Promise((resolve) => httpServer.listen({ port: port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer(schema);
