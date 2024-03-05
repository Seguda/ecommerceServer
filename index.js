const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

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
console.log(process.env);
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log("Backend Server is running!");
});
