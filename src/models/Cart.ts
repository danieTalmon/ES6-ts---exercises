type Record<String , Number> = {
    [index: string]: number
}

export class Cart {
    cartObject: Record<String,Number>;
    totalPrice: number;

    constructor() {
        this.cartObject = {};
        this.totalPrice = 0;
    }

    addProduct(productName: string, productPrice: number) { 

        if (!(productName in this.cartObject)) {
            this.cartObject[productName] = 1;
            this.totalPrice += productPrice;
        }
    }

    removeProduct (productName: string, productPrice: number) {

        if (productName in this.cartObject) {
            this.totalPrice -= productPrice;
            delete this.cartObject[productName]; // removing the product with name, productName
        }    
    }

    updateProductAmount(productName: string, productPrice: number,  newAmount: number, productLimit: number) {

        if (productName in this.cartObject) {
            let productAmount = this.cartObject[productName];
            if(productLimit === undefined || newAmount < productLimit) {
                const difOfAmount: number = newAmount - productAmount;
                this.totalPrice += ( difOfAmount * productPrice)
                this.cartObject[productName] = newAmount;
            }
        }
    }

    checkout() {
        this.cartObject = {};
        this.totalPrice = 0;  
    }
}