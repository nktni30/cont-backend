const brandModel = require("../models/brandModel.js");
const slugify = require("slugify");
const fs = require("fs");

const createBrandController = async (req, res) => {
  try {
    const { brandname} = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !brandname:
        return res.status(500).send({ error: "Name is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const brand = new brandModel({
      ...req.fields,
      slug: slugify(brandname),
    });
    if (photo) {
      brand.photo.data = fs.readFileSync(photo.path);
      brand.photo.contentType = photo.type;
    }
    await brand.save();
    res.status(201).send({
      success: true,
      message: "Brand Created Successfully",
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing Brand",
    });
  }
};

const getBrandControlller = async (req, res) => {
  try {
    const brand = await brandModel.find({});
    res.status(200).send({
      success: true,
      message: "All Brands List",
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all brands",
    });
  }
};



// const updateCategoryController = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const { id } = req.params;
//     const category = await categoryModel.findByIdAndUpdate(
//       id,
//       { name, slug: slugify(name) },
//       { new: true }
//     );
//     res.status(200).send({
//       success: true,
//       messsage: "Category Updated Successfully",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error while updating category",
//     });
//   }
// };

// const deleteCategoryController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await categoryModel.findByIdAndDelete(id);
//     res.status(200).send({
//       success: true,
//       message: "Categry Deleted Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "error while deleting category",
//       error,
//     });
//   }
// };

//get category photo
const brandPhotoController = async (req, res) => {
  try {
    const brand = await brandModel.findById(req.params.pid).select("photo");
    if (brand.photo.data) {
      res.set("Content-type", brand.photo.contentType);
      return res.status(200).send(brand.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

module.exports = {
  createBrandController,
  getBrandControlller,
  brandPhotoController,
};
