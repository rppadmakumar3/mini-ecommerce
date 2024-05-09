const express = require('express');
const { getProducts, singleProduct } = require('../controllers/ProductController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(singleProduct);

module.exports = router;