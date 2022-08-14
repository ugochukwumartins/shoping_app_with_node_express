const path= require('path');
const express= require('express');
const bodyParser= require('body-parser');


const app = express();

const admintRoute= require('./routes/admin');
const shopRoutes= require('./routes/shop');



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admintRoute);

app.use(shopRoutes);


app.use((req,res, next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','error_page.html'));
});
//const server= http.createServer(app);

//server.listen(3000);
app.listen(3000);
