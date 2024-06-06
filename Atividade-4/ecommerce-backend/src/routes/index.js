const express = require("express");
const userRoutes = require("./user");
const productRoutes = require("./product");
const orderRoutes = require("./order");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
