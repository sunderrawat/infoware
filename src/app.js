const express = require("express");

const userRouter = require("./routes/userRoutes");
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');
const app = express();

// parse request body data into json
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "hello from server" });
});

//api routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
