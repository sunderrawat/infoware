const express = require("express");
const orderController = require("./../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAll)
  .post(orderController.createOrder);

//find all order by user id
router.route("/:userId").get(orderController.getOneUserOrder);

module.exports = router;
