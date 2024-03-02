const express = require("express");
const ctrl = require("../../controllers/getMedicine");
// const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

module.exports = router;
