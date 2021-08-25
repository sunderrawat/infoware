const mongoose = require("mongoose");
//create a product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: [true, 'A product name is unique'],
      trim: true,
      minLength: [5, 'minimum 5 character'],
      maxLength: [50, 'maximum 50 character']
    },
    price: {
      type: Number,
      required: ['true', 'A product must be a price'],
    },
    category:{
      type: String
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          //this only point to the current doc on new document creation
          return val <= this.price;
        },
        message: 'discount ({VALUE}) must be lower than its price',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'minimum rating is 1'],
      max: [5, 'maximum rating is 5'],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A product must have a short description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
    },
    images: [String],
  }
);

//define a product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;