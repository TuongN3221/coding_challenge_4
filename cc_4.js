// Task 1 - If Statements
let purchaseAmount = 200;// Declares variable with a value
// Assume a discount of 10% will be applied

//If statement that will apply discount if amount is over $100
let finalAmount;
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.1
} else {
    finalAmount = purchaseAmount;// Final total if discount requirements aren't met
};

console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);

// Task 2 - For Loop
const sales = [120, 85, 200, 150, 90, 400];// Declares array of sales

let totalSales = 0;// Sets up empty variable of sales

//For loop to calculate total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
    
}

// Return total as a template literal
console.log(`Total Sales: $${totalSales.toLocaleString()}`);

// Task 3 - While Loop
let stock = 10; //Intial stock amount

while (stock > 0) {
   console.log(`Stock remaining: ${stock}`);
    
   stock--;
}

console.log("STOCK EMPTY"); //Message after stock reaches zero



