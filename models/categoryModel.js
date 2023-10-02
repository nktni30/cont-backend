const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
  name: {
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

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
