const path= require('path');

const express= require('express');

const rootDir= require('../utils/path');
const produt= express.Router();
//const products=[];
produt.get('/products',(req,res, next)=>{
  //  res.sendFile(path.join(rootDir,'views','add-products.html'));
  res.render('products',{ pageTitle:'Products', path:'/products',formsCSS:true, productCSS:true, activeADDProducts:true});
}); 
module.exports = produt;