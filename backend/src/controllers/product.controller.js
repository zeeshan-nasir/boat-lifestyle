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

//Smart Watches Route
router.get("/smart_watches", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Smart watches" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Wireless Earbuds Route
router.get("/wireless_earbuds", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Wireless Earbuds" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Wireless Speakers Route
router.get("/wireless_speakers", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Wireless Speakers" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Home Theater Systems Route
router.get("/home_theatre", async (req, res) => {
  try {
    const products = await Product.find({
      itemCategory: "Home Theatre Systems",
    })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Wired Earphones Route
router.get("/wired_earphones", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Wired Earphones" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Mobile Acessories Route
router.get("/mobile_accessories", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Mobile Accessories" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Limited Edition Route
router.get("/limited_edition", async (req, res) => {
  try {
    const products = await Product.find({ itemCategory: "Limited Edition" })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Self Grooming Route
router.get("/grooming", async (req, res) => {
  try {
    const products = await Product.find({
      itemCategory: "Misfit - Best Trimmer for Men",
    })
      .lean()
      .exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
