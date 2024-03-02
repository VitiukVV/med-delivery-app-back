const { Schema, model } = require("mongoose");

const pharmacySchema = new Schema({
    pharmacyName: {
        type: String,
        required: true,
    },
});

const Pharmacy = model("pharmacies", pharmacySchema);

module.exports = Pharmacy;
