const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize= require('./utils/database');
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const admintRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const demo = require('./routes/product');
const carts = require('./routes/carts');
const product = require('./models/product')
const user = require('./models/user')
const Cart = require('./models/carts')
const CartItem = require('./models/cart-item')
const error = require('./controllers/error');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
    user.findByPk(1).then(users=>{
        req.user= users;
        next();
    }).catch(err=> console.log(err));
});

app.use('/admin', admintRoute);

app.use(shopRoutes);

app.use(demo);
app.use(carts);

app.use(error.erroPage);
//const server= http.createServer(app);

product.belongsTo(user,{constraints: true, onDelete: 'CASCADE'});
user.hasMany(product);
user.hasOne(Cart);
Cart.belongsTo(user,{constraints: true, onDelete: 'CASCADE'});
Cart.belongsToMany(product,{through: CartItem});
product.belongsToMany(Cart,{through: CartItem});
//server.listen(3000);
sequelize.authenticate().then(result =>{
    console.log(result);
    console.log("connection started");
    }).catch(error =>{
        console.log(error);   
    });

sequelize.sync().then(result =>{
return  user.findByPk(1)


}).then(userFound=>{
   if(!userFound) {
  return  user.create({name:'Ugo', email: 'test@gmail.com'});
   }
   return user;
}).then(cart=>{
    app.listen(3000);
}).catch(error =>{
    console.log(error);   
});
