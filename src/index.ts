import { Cart } from './models/Cart';
import fs = require('fs');

interface Product {
    name: string;
    description:string;
    price: number;
    amount: number;
    limit?: number;
}

fs.readFile('./products.json', (err, productsbuffer) => {
    if(err) {
        throw err;
    }
    const products: Product[] = JSON.parse(productsbuffer.toString());

    let cart: Cart = new Cart();

    cart.addProduct(productsJson[0].name, productsJson[0].price);

    cart.addProduct(productsJson[1].name, productsJson[1].price);

    cart.addProduct(productsJson[2].name,productsJson[2].price);

    cart.addProduct(productsJson[3].name,productsJson[3].price);

    console.log(cart);
    console.log('---------------------');

    cart.removeProduct(productsJson[1].name, productsJson[1].price);

    console.log(cart);
    console.log('---------------------');

    cart.updateProductAmount(productsJson[0], 31);
    cart.updateProductAmount(productsJson[2], 3);
    cart.updateProductAmount(productsJson[3], 3);

    console.log(cart);
    console.log('---------------------');

    cart.checkout();

    console.log(cart);
    console.log('---------------------');

});
