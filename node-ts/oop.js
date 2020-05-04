function getTotalPrice(price, salesTax, miscExpense) {
    if (price === void 0) { price = 0; }
    if (salesTax === void 0) { salesTax = 0; }
    if (miscExpense === void 0) { miscExpense = 0; }
    return price + (price * salesTax) + miscExpense;
}
console.log(getTotalPrice(10, 0.2, 2), "logs factory function");
console.log(getTotalPrice(100, 0.20, 12));
// In oop, no params are declared in the method, they are outlined in the props
var calculatePrice = {
    price: 25,
    salesTax: 0.1,
    miscExpense: 3,
    printReceipt: function () {
        return this.price + (this.price * this.salesTax) + this.miscExpense;
    }
};
console.log(calculatePrice, "logs object literal");
console.log(calculatePrice.printReceipt(), "logs print receipt as oop method");
