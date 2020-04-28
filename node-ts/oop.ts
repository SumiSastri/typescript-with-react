import { number } from "prop-types";

function getTotalPrice(price: number =0, salesTax: number = 0,miscExpense: number = 0) : number {
    return price + (price*salesTax) + miscExpense;
}
console.log(getTotalPrice(10, 0.2, 2 ), `logs factory function`)
console.log(getTotalPrice(100, 0.20, 12 ))

// In oop, no params are declared in the method, they are outlined in the props
let calculatePrice = {
    price: 25,
    salesTax: 0.1,
    miscExpense: 3,
    printReceipt: function(){
        return this.price + (this.price * this.salesTax) + this.miscExpense;
    }
}
console.log(calculatePrice, `logs object literal`)
console.log(calculatePrice.printReceipt(), `logs print receipt as oop method`)