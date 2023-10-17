const joi = require('joi');

// create a schema for the student model
// includes minimum length, maximum length and if required
const schema = joi.object({
    name: joi.string()
        .min(3)
        .max(30)
        .required(),
    address: joi.string()
        .min(3)
        .max(30)
        .required(),
});

module.export = schema;



