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
   const product= new Product(null,req.body.title, req.body.price, req.body.description, req.body.image);
   product.save().then(()=>{
    res.redirect('/');
   }).catch(erro=>console.log(erro));
  //  console.log(products);
  
};

exports.getProduts = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
     Product.fetchAll().then(([rows, columdefinintion])=>{
        res.render('shop/product-list',{
            prods: rows, 
            pageTitle:'My Shop',
            path:'/',
        })
     }).catch(erro=>{console.log(erro)});
       
  
   


};


exports.editProdut = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const productId= req.params.id;
    const editMode= req.query.edit;
   
    const product = Product.findById(productId,products =>{
        res.render('admin/edit-products',{
            prods: products, 
            pageTitle:'Edit-Products',
            path:'/edit-products',
       //   editing: editMode
        });
    });

};
exports.postEditProdut = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));



  const product= new  Product(req.body.id, req.body.title, req.body.price, req.body.description, req.body.image);
   product.save()
   res.redirect('/');
    // const product = Product.findById(productId,products =>{
    //     res.render('admin/edit-products',{
    //         prods: products, 
    //         pageTitle:'Edit-Products',
    //         path:'/edit-products',
    //    //   editing: editMode
    //     });
    // });

};

exports.deleteProduct = (req,res, next)=>{
  
    const productId= req.params.id;

  
   Product.delete(productId);
  res.redirect('/');
  

};

exports.produtDetails = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    const productId= req.params.id;

  Product.findById(productId).then(([rows,col])=>{
        res.render('shop/product-details',{
            prods:rows,
            pageTitle:'Product Details',
            path:'/products-details',
            
          
        });
    })
     
    
    

};