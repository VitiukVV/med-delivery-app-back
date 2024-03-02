const { ctrlWrapper } = require("../helpers");
const { UserOrder } = require("../models/userOrder");

const addOrder = async (req, res) => {
    const result = await UserOrder.create({ ...req.body });
    res.status(201).json(result);
};

module.exports = {
    addOrder: ctrlWrapper(addOrder),
};
