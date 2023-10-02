const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    productdetails: {
      type: String,
      required: true,
    },

    brandname: {
      type: mongoose.ObjectId,
      ref: "Brands",
      required: true,
    },

    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },

    subcategory: {
      type: mongoose.ObjectId,
      ref: "Subcategory",
      required: true,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    popular: {
      type: Boolean,
      
      // Set to true by default, change as needed
    },

    offer: {
      type: Boolean,
     
      // Set to true by default, change as needed
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
