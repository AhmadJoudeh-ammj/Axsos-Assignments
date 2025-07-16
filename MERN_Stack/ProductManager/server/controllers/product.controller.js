const Product = require('../models/product.model');


module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
};

