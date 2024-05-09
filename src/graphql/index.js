import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import { loadFiles } from "@graphql-tools/load-files";
import { resolvers } from "./resolvers/resolvers.js";
import { buildContext } from "graphql-passport";

export const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/graphql/schema.graphql'),
    resolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();
  server.applyMiddleware({ app })
}
