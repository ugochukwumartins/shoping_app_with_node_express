const path= require('path');

const express= require('express');

const productsController = require('../controllers/products');
const router= express.Router();

router.get('/add-products',productsController.getAddProduts);
router.post('/product',productsController.postAddProducts);
module.exports = router;
   