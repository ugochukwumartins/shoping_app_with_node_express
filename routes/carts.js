const express= require('express');
const cartsController = require('../controllers/cart');

const carts= express.Router();

carts.get('/carts',cartsController.getCartList);
carts.post('/cart',cartsController.postCartList);
carts.post('/cart-delete-item',cartsController.deleteCart);


module.exports = carts;