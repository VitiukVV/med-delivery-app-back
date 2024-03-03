const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const userOrderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        orderMedicines: [
            {
                drugName: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

userOrderSchema.post("save", handleMongooseError);

const userOrderJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "missing required name field",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "missing required email field",
        "string.email": "invalid email format",
    }),
    phoneNumber: Joi.string().required().messages({
        "any.required": "missing required phoneNumber field",
    }),
    address: Joi.string().required().messages({
        "any.required": "missing required address field",
    }),
    orderMedicines: Joi.array()
        .items(
            Joi.object({
                id: Joi.string().required().messages({
                    "any.required": "missing required id field",
                }),
                drugName: Joi.string().required().messages({
                    "any.required": "missing required drugName field",
                }),
                price: Joi.number().required().messages({
                    "any.required": "missing required price field",
                }),
                quantity: Joi.number().required().messages({
                    "any.required": "missing required quantity field",
                }),
            })
        )
        .required()
        .messages({
            "any.required": "missing required orderMedicines field",
        }),
    totalPrice: Joi.number().required().messages({
        "any.required": "missing required totalPrice field",
    }),
});

const schemas = {
    userOrderJoiSchema,
};

const UserOrder = model("userOrder", userOrderSchema);

module.exports = { UserOrder, schemas };
