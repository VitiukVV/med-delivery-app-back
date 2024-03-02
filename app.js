const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const pharmacyNamesRouter = require("./routes/api/pharmacies");
const medicineRouter = require("./routes/api/medicine");
const userOrderRouter = require("./routes/api/userOrders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/pharmacy", pharmacyNamesRouter);
app.use("/medicine", medicineRouter);
app.use("/order", userOrderRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
