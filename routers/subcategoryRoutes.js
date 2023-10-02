const express = require("express");
const subcategoryController = require("../controllers/subcategoryController.js");
const formidable = require("express-formidable")

const router = express.Router();

//routes
router.post("/create-subcategory",formidable(), subcategoryController.createSubCategoryController);
router.get("/get-subcategory", subcategoryController.getSubCategoryControlller);
router.get("/get-subcategory/category/:id", subcategoryController.getsubCatbyCategory);

// router.put("/update-category/:id", categoryController.updateCategoryController);
// router.delete("/delete-category/:id", categoryController.deleteCategoryController );
module.exports = router;
