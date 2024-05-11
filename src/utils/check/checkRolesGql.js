import Boom from"@hapi/boom";

export const checkRolesGql = async (user, ...roles) => {
  if (!roles.includes(user.rol)) {
    const boomError = Boom.unauthorized("No tiene permiso para acceder a este recurso, por favor comuníquese con el administrador"
    );
    throw  boomError;
  }
}
