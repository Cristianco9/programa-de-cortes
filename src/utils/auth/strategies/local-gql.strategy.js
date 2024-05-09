/**
 * Module for implementing GraphQL local authentication strategy.
 * @module GQLLocalStrategy
 */
// Import GraphQLLocalStrategy from graphql-passport library
import { GraphQLLocalStrategy } from "graphql-passport";
// Import userLogin function from userServices module
import { userLogin } from "../../../services/userServices.js";

/**
 * GraphQL local authentication strategy.
 * This strategy authenticates users based on their username and password.
 * @constant {GraphQLLocalStrategy} GQLLocalStrategy - GraphQL local authentication strategy instance.
 * @param {string} userName - The username of the user attempting to authenticate.
 * @param {string} password - The password of the user attempting to authenticate.
 * @param {function} done - Callback function to indicate authentication success or failure.
 * @returns {Promise<void>} A promise that resolves upon successful authentication or rejects with an error.
 */
export const GQLLocalStrategy = new GraphQLLocalStrategy(
  async (userName, password, done) => {
    try {
      // Attempt to authenticate user with provided username and password
      const token = await userLogin(userName, password);
      // If authentication succeeds, call the done callback with no error and the user token
      done(null, token);
    } catch (err) {
      // If authentication fails or an error occurs, call the done callback with the error
      done(err, false);
    }
});
