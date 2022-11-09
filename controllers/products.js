const Product = require('../models/product')

exports.getAddProduts = (req, res, next) => {
  //  res.sendFile(path.join(rootDir,'views','add-products.html'));
  res.render("admin/add-products", {
    pageTitle: "add-products",
    path: "/admin/add-products",
    formsCSS: true,
    productCSS: true,
    activeADDProducts: true,
  });
};

exports.postAddProducts = (req, res, next) => {
  // console.log(req.body);

  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;

  Product.create({
    title: title,
    price: price,
    imageUrl: image,
    description: description,
    userId: req.user.id
  }).then(results =>  res.redirect('/')).catch(erro =>{console.log(erro)});
};

exports.getProduts = (req, res, next) => {
  //   console.log(admintRoute.products);
  //     res.sendFile(path.join(rootDir,'views','shop.html'));
  Product.findAll()
    .then(products => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "My Shop",
        path: "/",
      });
    })
    .catch((erro) => {
      console.log(erro);
    });
};

exports.editProdut = (req, res, next) => {
  //   console.log(admintRoute.products);
  //     res.sendFile(path.join(rootDir,'views','shop.html'));
  const productId = req.params.id;
  

  const product = Product.findByPk(productId).then(products => {
    if(!product){
        res.redirect('/');
    }
    res.render("admin/edit-products", {
      prods: products,
      pageTitle: "Edit-Products",
      path: "/edit-products",
      //   editing: editMode
    });
  }).catch(erro => console.log(erro));
};

exports.postEditProdut = (req, res, next) => {
  //   console.log(admintRoute.products);
  //     res.sendFile(path.join(rootDir,'views','shop.html'));
  const productId=   req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;
  Product.findByPk(productId).then(product =>{
    product.title = title;
    product.price= price;
    product.imageUrl = image;
    product.description = s=description;
   return product.save();
  }).then(result =>{
    console.log('result');
    res.redirect("/");
  }).catch(erro =>{
    console.log(erro);
  });


  
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.id;

  Product.findByPk(productId).then(product =>{

   return product.destroy();
  }).then(result =>{
    console.log('result');
    res.redirect("/");
  }).catch(erro =>{
    console.log(erro);
  });
 
};

exports.produtDetails = (req, res, next) => {
  //   console.log(admintRoute.products);
  //     res.sendFile(path.join(rootDir,'views','shop.html'));
  const productId = req.params.id;

 
  Product.findByPk(productId).then(product => {
    res.render("shop/product-details", {
      prods: product,
      pageTitle: "Product Details",
      path: "/products-details",
    });
  });
};
