const Joi = require('@hapi/joi');

/**
 * @dev Validate against a Joi schema
 * @param {object} obj Object
 * @param {Joi.Schema} model Joi Model
 * @returns {object}
 */
function validate(obj, model) {
  let errors = [];
  let validation = model.validate(obj, { abortEarly: false });
  if (validation.error) {
    validation.error.details.forEach((err) => {
      errors.push(err.message);
    });
  }
  if (errors.length > 0)
    return {
      error: errors.join(', '),
      value: validation.value
    }
  else
    return {
      value: validation.value
    }
}

module.exports = validate;