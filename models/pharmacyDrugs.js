// const Joi = require("joi");
const { Schema, model } = require("mongoose");

const pharmacyDrugsSchema = new Schema({
    pharmacyName: {
        type: String,
        required: true,
    },
    medicines: [
        {
            drugName: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
        },
    ],
});

const PharmacyDrugs = model("medicine", pharmacyDrugsSchema);

// const validateShopName = Joi.object({
//     pharmacyName: Joi.string().required().messages({
//         "any.required": "missing field pharmacyName",
//     }),
// });

// const schemas = {
//     validateShopName,
// };

module.exports = { PharmacyDrugs };
