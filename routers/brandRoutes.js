const express = require("express");
const formidable = require("express-formidable");
const brandController = require("../controllers/brandController.js");

const router = express.Router();

//routes
router.post("/create-brand",formidable(), brandController.createBrandController);
router.get("/get-brand", brandController.getBrandControlller);
router.get("/brand-photo/:pid", brandController.brandPhotoController);
// router.put("/update-category/:id", categoryController.updateCategoryController);
// router.delete("/delete-category/:id", categoryController.deleteCategoryController );
module.exports = router;
