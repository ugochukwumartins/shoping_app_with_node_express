const Product= require('../models/product');
exports.adminProdut = (req,res, next)=>{
    //   console.log(admintRoute.products);
    //     res.sendFile(path.join(rootDir,'views','shop.html'));
     Product.fetchAll().then(([rows, fieldata]) => { 
       // console.log(data);
        res.render('admin/product',{
            prods: rows, 
            pageTitle:'Admin-Products',
            path:'/admin/admin-products',
          
        });
    })
    .catch(erro => { 
        console.log(erro);
    })
     
    

};