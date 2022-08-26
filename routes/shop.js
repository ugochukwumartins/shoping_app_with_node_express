const path= require('path');
const express= require('express');


const productsController = require('../controllers/products');

const shopRouter= express.Router();

shopRouter.get ('/',productsController.getProduts);

module.exports= shopRouter;