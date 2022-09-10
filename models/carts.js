const fs = require('fs');

const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Carts {

    static addProducts(id, productPrice) {

        fs.readFile(p, (error, data) => {
            let cart = { products: [], totalPrice: 0 }
            if (!error) {

                cart = JSON.parse(data)


            };

            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProducts = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProducts) {
                updatedProduct = { ...existingProducts };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (error) => {
                console.log(error);
            });
        });
    }

    static deleProducts(id, productPrice) {
        fs.readFile(p, (error, data) => {

            if (error) {
                return;
            }

            const updatedCart = { ...JSON.parse(data) };
            const product = updatedCart.products.find(product => product.id === id);
            if(!product){
return;
            }
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(product => product.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), (error) => {
                console.log(error);
            });
        });
    }

    static getCart(cb) {
        fs.readFile(p, (error, data) => {
            const cart = JSON.parse(data);
            if (error) {
                cb(null);
            } else {
                cb(cart);
            }



        }

        );

    }
} 