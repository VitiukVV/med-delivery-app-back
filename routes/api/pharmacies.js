const express = require("express");
const ctrl = require("../../controllers/getAllPharmacy");

const router = express.Router();

router.get("/", ctrl.getAll);

module.exports = router;
