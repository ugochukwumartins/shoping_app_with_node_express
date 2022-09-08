const Product= require('../models/product');

const Cart= require('../models/carts');

exports.getCartList = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = Product.fetchAll(products =>{
        res.render('shop/cart',{
           // prods: products, 
            pageTitle:'Carts',
            path:'/carts',
        });
    });
   


};

exports.postCartList = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
  
   
const productId= req.body.prodsId;
console.log(productId);
Product.findById(productId,(product)=>{
Cart.addProducts(productId, product.productPrice )
})
res.redirect('/carts');
};