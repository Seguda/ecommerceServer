const express = require("express");
//import express from "express";
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.POT || 5000, () => {
  console.log("Backend Server is running!");
});
