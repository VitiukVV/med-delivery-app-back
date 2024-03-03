const { HttpError, ctrlWrapper } = require("../helpers");
const { PharmacyDrugs } = require("../models/pharmacyDrugs");

const getMedicineByPharmacy = async (req, res) => {
    const { pharmacyName } = req.query;
    const validpharmacyName = decodeURIComponent(pharmacyName);

    const result = await PharmacyDrugs.find({
        pharmacyName: validpharmacyName,
    });
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

module.exports = {
    getMedicineByPharmacy: ctrlWrapper(getMedicineByPharmacy),
};
