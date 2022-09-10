const fs = require('fs');

const Cart= require('../models/carts');
const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
// const dr= require('../utils/path'); 
const getProductsFromFile = cab => {

    fs.readFile(p, (error, data) => {
        if (error) {


            return cab([]);

        } else {
            cab(JSON.parse(data));
        }

    });
}

//const products = [];


module.exports = class Product {
    constructor(id, title, price, discription, imgUrl) {
        this.id = id,
            this.productTitle = title;
        this.productPrice = price;
        this.productDiscription = discription;
        this.imageUrl = imgUrl;

    }

    save() {


        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(product => product.id === this.id);
                const updatedProduct = [...products];
                updatedProduct[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
                    console.log(err);
                });
            } else {
                this.id = Math.floor(Math.random() * 2000).toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });

        //products.push(this);
    };

   static delete(id) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id)
            
                const existingProductIndex = products.findIndex(product => product.id === id);
                const updatedProduct = [...products];
                updatedProduct.splice(existingProductIndex, 1) ;
                Cart.deleProducts(id,  product.productPrice);
                fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
                    if(!err){
                        
                    }
                    
                });
             
            
        });
    };


    static fetchAll(cab) {
        getProductsFromFile(cab);

    }
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id == id);
            cb(product);
        });

    }
}