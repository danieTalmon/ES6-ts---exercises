export class Cart {
    cartObject: Record<string,number>;
    totalPrice: number;

    constructor() {
        this.cartObject = {};
        this.totalPrice = 0;
    }

    addProduct(productName: string, productPrice: number) { 

        if (!(this.cartObject[productName])) {
            this.cartObject[productName] = 1;
            this.totalPrice += productPrice;
        }
    }

    removeProduct (productName: string, productPrice: number) {

        if (this.cartObject[productName]) {
            this.totalPrice -= productPrice;
            delete this.cartObject[productName];
        }    
    }

    updateProductAmount(product: any,  newAmount: number) {

        if (this.cartObject[product.name]) {
            const productAmount = this.cartObject[product.name];
            if(product.limit || newAmount < product.limit) {
                const difOfAmount: number = newAmount - productAmount;
                this.totalPrice += ( difOfAmount * product.price)
                this.cartObject[product.name] = newAmount;
            }
        }
    }

    checkout() {
        this.cartObject = {};
        this.totalPrice = 0;  
    }
}