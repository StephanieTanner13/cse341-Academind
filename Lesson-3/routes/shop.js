const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

//list all of the products
router.get('/products', shopController.getProducts);

//get a single product with the product id. We create that variable and the : here is how to use it
//with the router
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

//this is the connection to view a cart with the product
router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
