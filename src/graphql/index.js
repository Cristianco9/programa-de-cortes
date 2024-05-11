import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import { loadFiles } from "@graphql-tools/load-files";
import { resolvers } from "./resolvers/resolvers.js";
import { buildContext } from "graphql-passport";
import {
  typeDefs as scalarsTypeDefs,
  resolvers as scalarsResolvers
} from "graphql-scalars";

export const useGraphql = async (app) => {
  const typeDefs = [
    ...await loadFiles('./src/graphql/schema.graphql'),
    scalarsTypeDefs
  ];
  const allResolvers = [
    resolvers,
    scalarsResolvers
  ];
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();
  server.applyMiddleware({ app })
}
