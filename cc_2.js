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
    isActive: true
};

console.log("Initial Object", employee);

employee.department = "e-commerce";
console.log("Changed Department", employee);

employee.position = "intern";
console.log("Added Position", employee);

