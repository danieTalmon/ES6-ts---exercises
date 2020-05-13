import { Cart } from './models/Cart';
import fs = require('fs');

fs.readFile('./products.json', (err, productsbuffer) => {
    if(err) {
        throw err;
    }
    const productsJson = JSON.parse(productsbuffer.toString());

    let cart: Cart = new Cart();

    // add product
    cart.addProduct(productsJson[0].name, productsJson[0].price);

    cart.addProduct(productsJson[1].name, productsJson[1].price);

    cart.addProduct(productsJson[2].name,productsJson[2].price);

    cart.addProduct(productsJson[3].name,productsJson[3].price);

    console.log(cart);
    console.log('---------------------');
    //remove product

    cart.removeProduct(productsJson[1].name, productsJson[1].price);

    console.log(cart);
    console.log('---------------------');

    //update amount of products
    cart.updateProductAmount(productsJson[0].name, productsJson[0].price, 31, productsJson[0].limit);
    cart.updateProductAmount(productsJson[2].name, productsJson[2].price, 3, productsJson[2].limit);
    cart.updateProductAmount(productsJson[3].name, productsJson[3].price, 3, productsJson[3].limit);

    console.log(cart);
    console.log('---------------------');
    // cart checkout

    cart.checkout();

    console.log(cart);
    console.log('---------------------');

});






