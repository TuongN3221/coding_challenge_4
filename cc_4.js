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

