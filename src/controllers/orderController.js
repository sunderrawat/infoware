const Order = require("./../model/orderModel");

//create a new order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Order successfully placed",
      data: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get all orders
exports.getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      status: "success",
      total: orders.length,
      message: "All orders are loaded successfully",
      data: orders,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

//get all order by userid
exports.getOneUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    if (!orders) {
      res.status(200).json({
        status: "success",
        message: "No orders found for this user id",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "your orders is loaded successfully",
        data: orders,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
