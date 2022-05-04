//Product Routes

const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

//Get all products route
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
