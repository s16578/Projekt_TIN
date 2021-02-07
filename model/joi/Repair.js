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
            case "date.empty":
                err.message = 'Wymagana data';
                break;
            case "date.min":
                err.message = 'Data nie może być sprzed daty rozpoczęcia';
                break;
            case "date.format":
                err.message = 'Niepoprawny format daty';
                break;
            default:
                break;
        }
    });
    return errors;
}

const repairSchema = Joi.object({
    id: Joi.number()
        .optional()
        .allow(""),
    employee_id: Joi.number()
        .optional()
        .required(),
    repair_id: Joi.number()
        .optional()
        .required(),
    status: Joi.string()
        .min(2)
        .max(60)
        .required()
        .error(errMessages),
    note: Joi.string()
        .min(2)
        .max(60)
        .required()
        .error(errMessages),
    cost: Joi.number()
        .positive()
        .integer(),
    date_start: Joi.date()
        .format("YYYY-MM-DD")
        .required(),
    date_end: Joi.date()
        .format("YYYY-MM-DD")
        .min(date_start)
        .optional()
});

module.exports = repairSchema;
