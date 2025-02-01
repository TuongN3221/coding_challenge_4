// Task 1 - Customer Discounts
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

// Task 2 - Sales Report
const sales = [120, 85, 200, 150, 90, 400];// Declares array of sales

let totalSales = 0;// Sets up empty variable of sales

//For loop to calculate total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
    
}

// Return total as a template literal
console.log(`Total Sales: $${totalSales.toLocaleString()}`);

// Task 3 - Inventory Depletion
let stock = 10; //Intial stock amount

while (stock > 0) {
   console.log(`Stock remaining: ${stock}`);
    
   stock--;
}

console.log("STOCK EMPTY"); //Message after stock reaches zero

// Task 4 - Customer Survey
let responses = 0; // Declares responses variable
do {
    // logs responses 
    console.log(`Collect ${responses} responses so far...`)
} while (responses < 3);// Logs responses up to 3

console.log("Collection Complete.");

// Task 5 - Employee Information
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000

};// Declares object employee

for (const property in employee) {

    console.log(`${property}: ${employee[property]}`);
    // ${property} inserts the name while ${employee[property]} access the value of the property
};

// Task 6 - Product Listings
let products = ["Haddock", "Halibut", "Porgy"];// Declares array of fish

for (const product of products) {
    
    console.log(`Product: ${product}`);
};// For...of loop to display each element

// Task 7 - Order Processing
let orders = [111, 222, 333, 444];// Declares array of orders

orders.forEach(element => {
    // Logs each order individually
    console.log(`Order Number: ${element}`)
});

// Task 8 - Tax Calculation
//Declares the amount and tax percentage 
const amount = 400;
const taxRate = 99; 
const tax = calculateTax(amount, taxRate);


function calculateTax(amount, taxRate) {
    // Calculate tax
    const tax = amount * (taxRate / 100);

    // Logs results
    console.log(`Tax on $${amount} at ${taxRate}%: $${tax.toFixed(2)}`);

    return tax;
};
