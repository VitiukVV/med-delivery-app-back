const express = require("express");
const ctrl = require("../../controllers/addUserOrder");
const { schemas } = require("../../models/userOrder");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post("/", validateBody(schemas.userOrderJoiSchema), ctrl.addOrder);

module.exports = router;
