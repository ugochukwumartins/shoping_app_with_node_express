// const db = require('../utils/database');

// const Cart= require('../models/carts');

// db.execute('SELECT * FROM ojadb.products')
// .then(data => {
//     console.log(data);

// })
// .catch(erro => {
//     console.log(erro);
// });

// module.exports = class Product {
//     constructor(id, title, price, discription, imgUrl) {
//         this.id = id,
//             this.productTitle = title;
//         this.productPrice = price;
//         this.productDiscription = discription;
//         this.imageUrl = imgUrl;

//     }

//     save() {
//      return   db.execute('INSERT INTO ojadb.products (Title,Price,Descriptions,ImageUrl) VALUES (?,?,?,?)',
//         [this.productTitle, this.productPrice, this.productDiscription, this.imageUrl]);

//     };

//    static delete(id) {

//     };

//     static fetchAll() {
//      return   db.execute('SELECT * FROM ojadb.products');

//     }
//     static findById(id) {
//         return   db.execute('SELECT * FROM ojadb.products WHERE products.ProductID = ?',[id]);
//     }
// }

const  Sequelize = require('sequelize');
const sequelize = require("../utils/database");

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,

    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,

    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,

    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,

    allowNull: false,
  },
});

module.exports = Product;