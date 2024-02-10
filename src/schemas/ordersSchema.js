import Joi from 'joi';

export const ordersSchema = Joi.object({

  //user_owner_email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  orderNumber: Joi.number().min(1).max(1_000_000_000).required(),
  //status: Joi.string().min(5).max(10).required()

});
