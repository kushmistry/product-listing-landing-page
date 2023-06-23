const express = require("express");
const { getProduct } = require("../controller/productController.js");

const router = express.Router();

router.get("/products", getProduct);

module.exports = router;
