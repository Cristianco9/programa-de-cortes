import Joi from 'joi';

export const anjeosHeavySchema = Joi.object({

  color: Joi.string().min(5).max(8).required(),
  perfil: Joi.string().min(4).max(12).required(),
  apertura: Joi.string().min(4).max(13).required(),
  lugar: Joi.string().min(2).max(15).required(),
  ancho: Joi.number().min(10).max(1_000).precision(1).required(),
  altura: Joi.number().min(10).max(1_000).precision(1).required(),
  cabezal: Joi.number().min(1).max(10).precision(1).required(),
  adaptador: Joi.number().min(1).max(10).precision(1).required(),
  perfilSuperior: Joi.number().min(10).max(1_000).precision(1).required(),
  instalacion: Joi.string().min(7).max(7).required(),
  alturaDivisor: Joi.number().min(10).max(1_000).precision(1).required(),
  manija: Joi.string().min(5).max(12).required(),
  lado: Joi.string().min(7).max(9).required(),
  notas: Joi.string().min(0).max(200)

});
