const Product= require('../models/product');

const Cart= require('../models/carts');

exports.getCartList = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    Cart.getCart(cart=>{

  
     Product.fetchAll().then(([rows, columDefinition])=>{
        const  cartProducts=[];
        for (product of rows){
            const cartProduct=cart.products.find(prod=> prod.id === product.id);
            if(cartProduct){
cartProducts.push({productData: product, qty: cartProduct.qty});
            }
        }
        res.render('shop/cart',{
            prods:cartProducts, 
            pageTitle:'Carts',
            path:'/carts',
        });
     }).catch(erro=>{
        console.log(erro);
     })

   
    
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

exports.deleteCart = (req,res, next)=>{
    
    const productId= req.body.id;
    Product.findById(productId,(product)=>{
        console.log(product);
    Cart.deleProducts(productId, product.productPrice);
    res.redirect('/');

});
}