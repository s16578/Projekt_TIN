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
            case "number.positive":
                err.message = 'Liczba musi być dodatnia';
                break;
            case "number.integer":
                err.message = 'Liczba musi być całkowita';
                break;
            case "number.empty":
                err.message = 'Wymagana wartość liczbowa';
                break;
            default:
                break;
        }
    });
    return errors;
}

const compSchema = Joi.object({
    id: Joi.number()
        .optional()
        .allow(""),
    model: Joi.string()
        .min(5)
        .max(30)
        .required()
        .error(errMessages),
    customer_note: Joi.string()
        .min(10)
        .max(200)
        .required()
        .error(errMessages),
    ram: Joi.number()
        .positive()
        .integer(),
    disc: Joi.number()
        .positive()
        .integer(),
    gpu: Joi.string()
        .optional()
        .allow("")
});

module.exports = compSchema;
