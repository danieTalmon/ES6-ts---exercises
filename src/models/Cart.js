"use strict";
exports.__esModule = true;
var CartProduct_1 = require("./CartProduct");
var Cart = /** @class */ (function () {
    function Cart() {
        this.cartArray = [];
        this.totalPrice = 0;
    }
    Cart.prototype.indexOfProduct = function (productName) {
        for (var index = 0; index < this.cartArray.length; index++) {
            var product = this.cartArray[index];
            if (product.name === productName) {
                return index;
            }
        }
        return -1;
    };
    Cart.prototype.addProduct = function (product) {
        var productIndex = this.indexOfProduct(product.name);
        if (productIndex === -1) {
            this.cartArray.push(new CartProduct_1["default"](product.name, product.description, product.price, product.amount, product.limit));
        }
    };
    Cart.prototype.removeProduct = function (productName) {
        var productIndex = this.indexOfProduct(productName);
        if (productIndex !== -1) {
            this.totalPrice = -this.cartArray[productIndex].price;
            this.cartArray.filter(function (p) { return p.name !== productName; }); 
        }
    };
    Cart.prototype.updateProductAmount = function (productName, newAmount) {
        var productIndex = this.indexOfProduct(productName);
        if (productIndex !== -1) {
            var product = this.cartArray[productIndex];
            if (product.limit === undefined || newAmount < product.limit) {
                var difOfAmount = newAmount - product.amount;
                this.totalPrice = +(difOfAmount * product.price);
            }
        }
    };
    return Cart;
}());
exports["default"] = Cart;
