// Task 1 - Customer Discounts
let purchaseAmount = 300;// Declares amount
let finalAmount = purchaseAmount;
const discount = 0.1;// declares discount

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * discount;

}
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
let fishStock = 10; //Intial stock amount

while (fishStock > 0) {
   console.log(`Stock remaining: ${fishStock}`);
    
   fishStock--;
}

console.log("STOCK EMPTY -- GO OUT AND FISH FOR MORE"); //Message after stock reaches zero

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

// Task 9 - Discount Application
const price = 450000;// sets up price 
const discountPercent = 0.6; // sets up discount

const applyDiscount = function (price, discountPercent) {
    //Calculates discount amount
    const discountAmount = price * (discountPercent)

    const discountedPrice = price - discountAmount
    return discountedPrice;
}; // Sets up applyDiscount function

// Calls the function to display the final price
const finalPrice = applyDiscount(price, discountPercent);

console.log(`Price after ${discountPercent}% discount: $${finalPrice.toFixed(2)}`);

// Task 10 - Loyalty Points
const purchaseAmount1 = 50000; // Declares purchase to be converted to points

const pointCalculator = (purchaseAmount1) => {

    //Calculates points for every $10 spent
    const points = Math.floor(purchaseAmount1 / 10);
    return points;
}

// calls function and stores output
const pointsEarned = pointCalculator(purchaseAmount1);

console.log(`Points earned from purchase of $${purchaseAmount1}: ${pointsEarned}`);
