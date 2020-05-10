class CartProduct {

    name: string;
    description: string;
    price: number;
    amount: number;
    limit: number;

    constructor(name: string, description: string, price: number, amount: number, limit: number ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
        this.limit = limit;

    }
}

export default CartProduct ;