/**
 * Resolves the login mutation in GraphQL.
 * This resolver handles user authentication using provided credentials (email and password).
 * @param {Object} _ The parent object, which for a root Query/Mutation is often not used.
 * @param {Object} args The arguments passed to the resolver, containing a DTO (Data Transfer Object) with user credentials.
 * @param {Object} context The context object containing authentication functionality.
 * @returns {Object} An object containing a token upon successful authentication.
 * @throws {Error} Throws an error if there's an issue during authentication.
 */
export const login = async (_, { dto }, context) => {
  // Extract username and password from the DTO
  const email = dto.userName;
  const password = dto.password;

  try {
    // Attempt to authenticate the user using provided credentials
    const dataResponse = await context.authenticate(
      // Strategy name (could be 'graphql-jwt', 'graphql-oauth', etc.)
      'graphql-local',
      // Credentials object containing username and password
      { email, password }
    );

    // Extract the token from the userToken object
    const token = dataResponse.user;

    // Return an object containing the authentication token
    return { token };
  } catch (error) {
    // If an error occurs during authentication, log the error and re-throw it
    console.error("Error during login:", error);
    throw error;
  }
};


/*import { userLogin } from "../../services/userServices.js";

export const login = (_, { dto }) => {
  return userLogin(dto.userName, dto.password)
    .then(token => {
      // If userLogin succeeds, return the token
      return { token: token };
    })
    .catch(error => {
      // If userLogin fails, throw an error
      throw new Error('Authentication failed: ' + error.message);
    });
}; */
