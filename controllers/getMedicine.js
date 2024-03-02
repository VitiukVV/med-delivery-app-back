// const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");
const PharmacyDrugs = require("../models/pharmacyDrugs");

const getAll = async (req, res) => {
    const result = await PharmacyDrugs.find();
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
};
