const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Orders must belong to a Product!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Orders must belong to a User!"],
  },
  price: {
    type: Number,
    require: [true, "Orders must have a price."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
