const express = require("express");
const ctrl = require("../../controllers/getMedicine");
// const { validateOneStringBody } = require("../../middlewares");
// const { schemas } = require("../../models/pharmacyDrugs");

const router = express.Router();

router.get(
    "/",
    // validateOneStringBody(schemas.validateShopName),
    ctrl.getMedicineByPharmacy
);

module.exports = router;
