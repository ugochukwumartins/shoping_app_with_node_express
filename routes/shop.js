const path= require('path');
const express= require('express');

const rootDir= require('../utils/path');
const shopRouter= express.Router();
const admintRoute= require('./admin');
shopRouter.get ('/',(req,res, next)=>{
//   console.log(admintRoute.products);
//     res.sendFile(path.join(rootDir,'views','shop.html'));

const produts= admintRoute.products;
res.render('shop',{prods:produts, pageTitle:'My Shop' ,path:'/'});
});

module.exports= shopRouter;