const { HttpError, ctrlWrapper } = require("../helpers");
const { PharmacyDrugs } = require("../models/pharmacyDrugs");

const getMedicineByPharmacy = async (req, res) => {
    const { pharmacyName } = req.body;
    const result = await PharmacyDrugs.findOne({ pharmacyName });
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

module.exports = {
    getMedicineByPharmacy: ctrlWrapper(getMedicineByPharmacy),
};
