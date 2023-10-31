const express = require("express");
//import express from "express";
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.Mongo_URL)
  // eslint-disable-next-line no-console
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
app.use(
  cors({
    origin: "*", // that will for all like  https / http
  })
);
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log("Backend Server is running!");
});
