import Cart from './models/Cart';
import CartProduct from './models/CartProduct';
const fs = require('fs');

let productsJson = JSON.parse(fs.readFileSync('./products.json'));

let cart: Cart = new Cart();

// add product
cart.addProduct(productsJson[0]);

cart.addProduct(productsJson[1]);

cart.addProduct(productsJson[2]);

cart.addProduct(productsJson[3]);

console.log(cart);
console.log('---------------------');
//remove product

cart.removeProduct(productsJson[1].name);

console.log(cart);
console.log('---------------------');

//update amount of products
cart.updateProductAmount(productsJson[0].name,31);
cart.updateProductAmount(productsJson[2].name, 3);

console.log(cart);
console.log('---------------------');
// cart checkout

cart.checkout();

console.log(cart);
console.log('---------------------');






