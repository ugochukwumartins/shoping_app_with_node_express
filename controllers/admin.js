const Product= require('../models/product');
exports.adminProdut = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const product = Product.fetchAll(products =>{
        res.render('admin/product',{
            prods: products, 
            pageTitle:'Admin-Products',
            path:'/admin/admin-products',
          
        });
    });

};