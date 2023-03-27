const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
