const express= require('express');
const cartsController = require('../controllers/cart');

const carts= express.Router();

carts.get('/carts',cartsController.getCartList);
carts.post('/carts',cartsController.postCartList);

module.exports = carts;