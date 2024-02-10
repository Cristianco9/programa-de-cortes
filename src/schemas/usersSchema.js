import Joi from 'joi';

export const usersSchema = Joi.object({

  user_email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  rol: Joi.string().min(5).max(10).required(),
  name: Joi.string().alphanum().min(3).max(15).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  order_id: Joi.number().min(1).max(1_000_000_000).required()

});
