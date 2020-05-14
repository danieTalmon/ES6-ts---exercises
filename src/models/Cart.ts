export class Cart {
    cart: Record<string,number>;
    totalPrice: number;

    constructor() {
        this.cart = {};
        this.totalPrice = 0;
    }

    addProduct(productName: string, productPrice: number) { 

        if (!(this.cart[productName])) {
            this.cart[productName] = 1;
            this.totalPrice += productPrice;
        }
    }

    removeProduct (productName: string, productPrice: number) {

        if (this.cart[productName]) {
            this.totalPrice -= productPrice;
            delete this.cart[productName];
        }    
    }

    updateProductAmount(product: any,  newAmount: number) {

        if (this.cart[product.name]) {
            const productAmount = this.cart[product.name];
            if(product.limit || newAmount < product.limit) {
                const difOfAmount: number = newAmount - productAmount;
                this.totalPrice += ( difOfAmount * product.price)
                this.cart[product.name] = newAmount;
            }
        }
    }

    checkout() {
        this.cart = {};
        this.totalPrice = 0;  
    }
}
