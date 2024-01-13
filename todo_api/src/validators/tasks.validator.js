import Joi from 'joi';

export default {
  createItem: Joi.object({
    text: Joi.string().min(1).required().label('Text'),
    done: Joi.boolean().default(false).label('Done'),
  }),
  updateItem: Joi.object({
    text: Joi.string().min(1).required().label('Text'),
    done: Joi.boolean().default(false).label('Done'),
  }),
  partialUpdateItem: Joi.object({
    text: Joi.string().min(1).label('Text'),
    done: Joi.boolean().default(false).label('Done'),
  }),
};
