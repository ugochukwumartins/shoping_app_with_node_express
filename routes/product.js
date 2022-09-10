const path= require('path');

const express= require('express');
const productsController = require('../controllers/products');
const rootDir= require('../utils/path');
const produt= express.Router();

//const products=[];
produt.get('/home',(req,res, next)=>{
  //  res.sendFile(path.join(rootDir,'views','add-products.html'));
  res.render('index',
  { pageTitle:'Products', 
  path:'/home',
  formsCSS:true, 
  productCSS:true, 
  activeADDProducts:true});
}); 
produt.get ('/product-details/:id',productsController.produtDetails);

module.exports = produt;