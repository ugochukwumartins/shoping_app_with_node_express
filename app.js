const path= require('path');
const express= require('express');
const bodyParser= require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const admintRoute= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const demo= require('./routes/use_product');



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admintRoute.routes);

app.use(shopRoutes);

app.use(demo);


app.use((req,res, next) =>{
    res.status(404).render('error_page', { pageTitle: 'Page Not Found', path:'/error'});
});
//const server= http.createServer(app);

//server.listen(3000);
app.listen(3000);
