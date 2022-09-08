const Product= require('../models/product');

exports.getAddProduts= (req, res, next) => {
    //  res.sendFile(path.join(rootDir,'views','add-products.html'));
    res.render('admin/add-products', { 
        pageTitle: 'add-products',
        path: '/admin/add-products',
        formsCSS: true,
        productCSS: true, 
        activeADDProducts: true });
};

exports.postAddProducts=(req,res, next)=>{
    // console.log(req.body);
   const product= new Product(req.body.title, req.body.price, req.body.description, req.body.image);
   product.save();
  //  console.log(products);
    res.redirect('/');
};

exports.getProduts = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = Product.fetchAll(products =>{
        res.render('shop/product-list',{
            prods: products, 
            pageTitle:'My Shop',
            path:'/',
        });
    });
   


};


exports.editProdut = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const product = Product.fetchAll(products =>{
        res.render('admin/edit-products',{
            prods: products, 
            pageTitle:'Edit-Products',
            path:'/edit-products',
          
        });
    });

};

exports.produtDetails = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const productId= req.params.id;
    console.log(productId);
    const product = Product.findById(productId,product =>{
     
        res.render('shop/product-details',{
            prods:product,
            pageTitle:'Product Details',
            path:'/products-details',
          
        });
    });

};