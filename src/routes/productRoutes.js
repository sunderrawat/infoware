const express = require("express");
const productController = require("./../controllers/productController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAll)
  .post(productController.createProduct);

  //find product by id
router.route("/:id").get(productController.getOne);

module.exports = router;
