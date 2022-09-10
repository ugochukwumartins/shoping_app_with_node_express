const path= require('path');

const express= require('express');

const productsController = require('../controllers/products');
const adminController = require('../controllers/admin');
const router= express.Router();

router.get('/add-products',productsController.getAddProduts);
router.post('/product',productsController.postAddProducts);
router.get('/edit-products/:id',productsController.editProdut);
router.post('/edit-products/',productsController.postEditProdut);
router.get('/admin-products',adminController.adminProdut);
router.get('/deleteProducts/:id',productsController.deleteProduct);
module.exports = router;
   