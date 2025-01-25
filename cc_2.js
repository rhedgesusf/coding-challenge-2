/////////////////////////////////
// Task 1: Working With Arrays //
/////////////////////////////////

let products = ["Coke", "Pepsi", "Fanta", "Sprite", "Ginger Ale"];
console.log("Initial Array", products);

products.push("Mug Rootbeer");
console.log("Added Mug", products);

products.pop();
console.log("Removed Mug", products);

////////////////////////////////////////////
// Task 2: Accessing and Modifying Arrays //
////////////////////////////////////////////

let scores = [90, 98, 45, 76, 37];
console.log("Initial Scores", scores);

scores[1] = 99;
console.log("Updated Second Score", scores);

let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
console.log("Sum:", sum);

console.log("Average:", sum / scores.length);

///////////////////////////////////
// Task 3: Working with Objects ///
///////////////////////////////////

let employee = {
  name: "Ethan Pitta",
  age: 20,
  department: "management",
  isActive: true,
};

console.log("Initial Object", employee);

employee.department = "e-commerce";
console.log("Changed Department", employee);

employee.position = "intern";
console.log("Added Position", employee);

///////////////////////////////
// Task 4: Array of Objects ///
///////////////////////////////

let customers = [
  {
    name: "Jon Jones",
    email: "JJones@gmail.com",
    purchaseAmount: 505.02
  },
  {
    name: "Bill Maiers",
    email: "BMaiers@gmail.com",
    purchaseAmount: 97.85
  },
  {
    name: "Morgan Freeman",
    email: "MFreeman@gmail.com",
    purchaseAmount: 5.99
  },
];

console.log("Initial Customers -", customers);
console.log("Initial Customers stringified -", JSON.stringify(customers));
console.log("Third Customer Name -", customers[2].name);

customers.push({
    name: "Mike Myers",
    email: "MM@gmail.com",
    purchaseAmount: 987.99
});

console.log("Adding 4th Customer -", JSON.stringify(customers));

//////////////////////////////
// Task 5: Objects Methods ///
//////////////////////////////

let order = {
    orderID: 97,
    customerName: "Riley Hedges",
    amount: 54.52
};

console.log("Initial Order:", order);

function calculateTax(price, taxRate) {
    return price * taxRate;
};

let taxRate = 0.10;
let tax = calculateTax(order.amount, taxRate);

console.log("Tax:", tax);
