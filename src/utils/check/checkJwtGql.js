import Boom from"@hapi/boom";

export const checkJwtGql = async (context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    const boomError = Boom.unauthorized('El token no es valido');
    throw boomError;
  }
  return user;
}
