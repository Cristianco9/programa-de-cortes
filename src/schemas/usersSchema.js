import Joi from 'joi';

export const usersSchema = Joi.object({

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  rol: Joi.string().min(6).max(15).required(),
  name: Joi.string().alphanum().min(3).max(15).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  repeatPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});
