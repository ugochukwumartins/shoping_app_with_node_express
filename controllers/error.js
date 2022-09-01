exports.erroPage = (req,res, next) =>{
    res.status(404).render('error_page', { 
        pageTitle: 'Page Not Found',
         path:'/error'});
};