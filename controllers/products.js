const products=[];

exports.getAddProduts= (req, res, next) => {
    //  res.sendFile(path.join(rootDir,'views','add-products.html'));
    res.render('add-products', { 
        pageTitle: 'add-products',
        path: '/admin/add-products',
        formsCSS: true,
        productCSS: true, 
        activeADDProducts: true });
};

exports.postAddProducts=(req,res, next)=>{
    // console.log(req.body);
     products.push({title:req.body.title, price: req.body.price, description: req.body.description});
  //  console.log(products);
    res.redirect('/');
};

exports.getProduts = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
    
   
    res.render('shop',{
        prods: products, 
        pageTitle:'My Shop',
        path:'/',
    });
    };