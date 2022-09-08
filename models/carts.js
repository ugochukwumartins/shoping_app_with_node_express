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
           const  existingProducts = cart.products[existingProductIndex];
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
            fs.writeFile(p, JSON.stringify(cart), (error)=>{
                console.log(error);
            });
        });
    }
} 