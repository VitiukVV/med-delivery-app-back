const Pharmacy = require("../models/pharmacyNames");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const result = await Pharmacy.find();
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
};
