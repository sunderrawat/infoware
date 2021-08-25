const Product = require("./../model/productModel");

//create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      message: "product is added successfully",
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get all product
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      total: products.length,
      message: "All products are loaded successfully",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

//browse product get one product by id
exports.getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(200).json({
        status: "success",
        message: "No product found please enter a valid product id",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "your product is loaded successfully",
        data: product,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
