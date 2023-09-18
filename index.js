const express = require("express");
//import express from "express";
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.Mongo_Url)
  // eslint-disable-next-line no-console
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 6500, () => {
  // eslint-disable-next-line no-console
  console.log("Backend Server is running!");
});
