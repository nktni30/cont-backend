const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandname: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
 
});

const Brand = mongoose.model("Brands", brandSchema);

module.exports = Brand;
