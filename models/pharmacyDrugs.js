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

module.exports = PharmacyDrugs;
