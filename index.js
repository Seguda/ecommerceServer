import { connect } from "mongoose";
import express, { json } from "express";
const app = express();
import { config } from "dotenv";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import productRoute from "./routes/product";
import cartRoute from "./routes/cart";
import orderRoute from "./routes/order";
import stripeRoute from "./routes/stripe";

import cors from "cors";
config();

connect(process.env.Mongo_URL)
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
app.use(json());
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
