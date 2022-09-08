const fs = require('fs');

const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
// const dr= require('../utils/path'); 
const getProductsFromFile = cab => {

    fs.readFile(p,  (error, data) => {
        if (error) {


         return   cab([]);

        }else{
            cab(JSON.parse(data));
        }
    
    });
}

//const products = [];


module.exports = class Product {
    constructor(title, price, discription,imgUrl) {
        this.productTitle = title;
        this.productPrice = price;
        this.productDiscription = discription;
        this.imageUrl=imgUrl;
    
    }

    save() {
        this.id=Math.floor( Math.random() *2000).toString();
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    
        //products.push(this);
    }

    static fetchAll(cab) {
        getProductsFromFile(cab);
       
    }
  static  findById(id, cb){
    getProductsFromFile(products =>{
    const product=    products.find(p=> p.id==id);
    cb(product);
    });
       
  }
}