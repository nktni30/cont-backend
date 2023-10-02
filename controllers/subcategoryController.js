const subcategoryModel = require("../models/subcategoryModel.js");
const slugify = require("slugify");
const categoryModel = require("../models/categoryModel.js")

const createSubCategoryController = async (req, res) => {
  try {
    const { subcategoryname, category } = req.fields;

    //alidation
    switch (true) {
      case !subcategoryname:
        return res.status(500).send({ error: "Name is Required" });

      case !category:
        return res.status(500).send({ error: "Category is Required" });
    }

    const subcategory = new subcategoryModel({
      ...req.fields,
      slug: slugify(subcategoryname),
    });

    await subcategory.save();
    res.status(201).send({
      success: true,
      message: "subcategory Created Successfully",
      subcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating subcategory",
    });
  }
};

//update category
//  const updateSubCategoryController = async (req, res) => {
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

// get all cat
const getSubCategoryControlller = async (req, res) => {
  try {
    const subcategory = await subcategoryModel.find({}).populate({path:'category', model:'Category', select:'name'});
    res.status(200).send({
      success: true,
      message: "All subCategories List",
      subcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all subcategories",
    });
  }
};


// get subcategory by category

const getsubCatbyCategory = async (req, res) => { 
  const category = req.params.id;
  try {
    const subcategory = await subcategoryModel.find({category});
    res.status(200).send({
      success: true,
      message: "Selected subCategories List",
      subcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all subcategories",
      
    });
  }
};

// // single category
// export const singleCategoryController = async (req, res) => {
//   try {
//     const category = await categoryModel.findOne({ slug: req.params.slug });
//     res.status(200).send({
//       success: true,
//       message: "Get SIngle Category SUccessfully",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error While getting Single Category",
//     });
//   }
// };

// //delete category
// export const deleteCategoryCOntroller = async (req, res) => {
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

module.exports = {
  createSubCategoryController,
  getSubCategoryControlller,
  getsubCatbyCategory,
};
