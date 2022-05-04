const mongoose = require("mongoose");

//creating product schema
const productSchema = new mongoose.Schema(
  {
    imageURLcolor1: { type: String, required: true },
    imageURLcolor2: { type: String, required: false },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    strikedPrice: { type: Number, required: false },
    Rating: { type: String, required: true },
    RatingCount: { type: Number, required: true },
    itemCategory: { type: String, required: true },
    discountprice: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//creating product model
const Product = mongoose.model("product", productSchema);

module.exports = Product;
