const Joi = require('@hapi/joi');
const { password } = require('./custom.validation');

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const createLead = {
	body: Joi.object().keys({
		email: Joi.string().required().email(),
		phone: Joi.string().regex(phoneRegex),
		name: Joi.string().required()
	}),
};

module.exports = {
	createLead
};
