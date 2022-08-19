const path= require('path');

const express= require('express');

const rootDir= require('../utils/path');
const router= express.Router();
const products=[];
router.get('/add-products',(req,res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-products.html'));
});
router.post('/product',(req,res, next)=>{
    console.log(req.body);
    products.push({title:req.body.title});
  //  console.log(products);
    res.redirect('/');
});
exports.routes= router;
exports.products= products;