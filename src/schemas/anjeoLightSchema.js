import Joi from 'joi';

export const anjeosLightSchema = Joi.object({

  color: Joi.string().min(5).max(8).required(),
  perfil: Joi.string().min(4).max(8).required(),
  apertura: Joi.string().min(4).max(16).required(),
  lugar: Joi.string().min(2).max(15).required(),
  ancho: Joi.number().min(7).max(150).precision(1).required(),
  anchoOpcional: Joi.number().min(0).max(150).precision(1),
  altura: Joi.number().min(7).max(300).precision(1).required(),
  guia: Joi.number().min(0).max(600).precision(1),
  instalacion: Joi.string().min(7).max(7).required(),
  alturaDivisor: Joi.number().min(0).max(300),
  cantidadDivisor: Joi.number().min(0).max(10),
  orientacionDivisor: Joi.string().min(0).max(10),
  angulo: Joi.string().min(7).max(18).required(),
  notas: Joi.string().min(0).max(200)

});
