const Joi = require('joi');

const errMessages = (errors) => {
    errors.forEach(err => {
        switch (err.code) {
            case "string.empty":
                err.message = "Pole jest wymagane";
                break;
            case "string.min":
                err.message = `Pole powinno zawierać co najmniej ${err.local.limit} znaki`;
                break;
            case "string.max":
                err.message = `Pole powinno zawierać co najwyżej ${err.local.limit} znaki`;
                break;
            default:
                break;
        }
    });
    return errors;
}

const empSchema = Joi.object({
    id: Joi.number()
        .optional()
        .allow(""),
    name: Joi.string()
        .min(2)
        .max(30)
        .required()
        .error(errMessages),
    surname: Joi.string()
        .min(2)
        .max(30)
        .required()
        .error(errMessages),
    role: Joi.string()
        .required()
        .error(errMessages)
});

module.exports = empSchema;
