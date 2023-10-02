const mongoose = require("mongoose");
const subcategorySchema = new mongoose.Schema(
  {
    subcategoryname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },

    category:{
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const subcategoryModel = mongoose.model(" Subcategory", subcategorySchema);

module.exports = subcategoryModel;
