const express = require("express");
const formidable = require("express-formidable");
const categoryController = require("../controllers/categoryController.js");

const router = express.Router();

//routes
router.post("/create-category",formidable(), categoryController.createCategoryController);
router.get("/get-category", categoryController.getcategoryControlller);
router.get("/get-category/:id", categoryController.getSingleCategory);
router.get("/category-photo/:pid", categoryController.categoryPhotoController);

// router.put("/update-category/:id", categoryController.updateCategoryController);
// router.delete("/delete-category/:id", categoryController.deleteCategoryController );
module.exports = router;
