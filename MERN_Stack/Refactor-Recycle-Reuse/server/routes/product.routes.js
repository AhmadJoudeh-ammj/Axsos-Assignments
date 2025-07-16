const ProductController =require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.post('/' , ProductController.createProduct);
router.get ('/' , ProductController.getAllProducts);
router.get('/:id', ProductController.getOneProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
