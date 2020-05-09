import CartProduct from './CartProduct';

class Cart {
    
    cartArray: Array<CartProduct>;
    totalPrice: Number;


    constructor() {
        this.cartArray = [];
        this.totalPrice = 0;
    }

    indexOfProduct (productName: string): number {
        for (let index = 0; index < this.cartArray.length; index++) {
            const product = this.cartArray[index];
            if(product.name === productName) {
                return index;
            }
        }

        return -1;
    }

    addProduct(product: any): void {
        const productIndex = this.indexOfProduct(product.name);

        if (productIndex === -1) {
            this.cartArray.push(new CartProduct(product.name, product.description, product.price, 
                product.amount, product.limit))
        }
    }

    removeProduct (productName: string): void {
        const productIndex = this.indexOfProduct(productName);

        if (productIndex !== -1) {
            this.totalPrice =- this.cartArray[productIndex].price;
            this.cartArray.filter (p => p.name !== productName); // removing the product with name, productName
        }    
    }


    updateProductAmount(productName: string, newAmount) {
        const productIndex = this.indexOfProduct(productName);

        if (productIndex !== -1) {
            let product = this.cartArray[productIndex];
            if(product.limit === undefined || newAmount < product.limit) {
                const difOfAmount: number = newAmount - product.amount;
                this.totalPrice =+ ( difOfAmount * product.price)
            }
        }
    }


}

export default Cart;