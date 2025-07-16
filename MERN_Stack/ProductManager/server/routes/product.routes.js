const ProductController =require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.post('/' , ProductController.createProduct);
router.get ('/' , ProductController.getAllProducts);

module.exports = router;
