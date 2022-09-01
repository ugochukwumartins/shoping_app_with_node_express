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
}