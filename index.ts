import Cart from './models/Cart';
import CartProduct from './models/CartProduct';
const fs = require('fs');

const productJson = fs.readFileSync('./products.json')

console.log( JSON.parse(productJson) );
