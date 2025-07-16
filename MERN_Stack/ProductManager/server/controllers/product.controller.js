const Product = require('../models/product.model');

//create a product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};

//Show all products
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
};

//get product by id
module.exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    })
    .catch(err => res.status(400).json({ message: '❌ Error fetching product', error: err }));
};

// edit or update a product
module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};

// delete a product
module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(result => res.json({ message: '✅ Product deleted', result }))
    .catch(err => res.status(400).json(err));
};

