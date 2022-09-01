const path= require('path');

const express= require('express');

const productsController = require('../controllers/products');
const adminController = require('../controllers/admin');
const router= express.Router();

router.get('/add-products',productsController.getAddProduts);
router.post('/product',productsController.postAddProducts);
router.get('/edit-products',productsController.editProdut);
router.get('/admin-products',adminController.adminProdut);
module.exports = router;
   