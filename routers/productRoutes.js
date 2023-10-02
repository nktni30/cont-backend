const express = require("express");
const formidable = require("express-formidable")
const productController = require("../controllers/productController");



const router = express.Router();

router.post("/create-product", formidable(), productController.createProductController);
router.get("/get-product", productController.getProductController);
router.get("/product-photo/:pid", productController.productPhotoController);
router.post('/product-filters', productController.productFiltersController);
router.get('/get-product/:slug', productController.getSingleProductController);
router.get('/get-product/brandname/:id', productController.getProductByBrand);
router.get('/get-product/category/:id', productController.getProductByCategory);
router.get('/popular', productController.getPopularProduct);
// router.put("/update-product/:id", );
// router.delete("/delete-product/:id", )

module.exports = router;

