// 1. Example of Scope:
// Example of function scope
function exampleVar() { 
    if (true) { 
        var message = "Hello, World!"; 
    } 
    console.log(message); // Works! (function-scoped) 
} 
exampleVar(); // Output: "Hello, World!" 

/* let & const → Block Scope 
• Variables are only accessible inside the block {} where they are declared. 
• Safer and more predictable than var. 
*/ 

// Example of block scope
function exampleLetConst() { 
    if (true) { 
        let message = "Hello, let!"; 
        const greeting = "Hello, const!"; 
        var check = "Var works"
    } 
    console.log(check)  // It will work properly
    //console.log(message);  // Error: Not accessible outside block 
    //console.log(greeting); // Error: Not accessible outside block 
} 
exampleLetConst(); 


// 2. Value Assignment at Declaration: only const need to be assigned where declaration

var a;
console.log(a) //result: undefined

let b;
console.log(b) //result: undefined

// const c;
// console.log(c) //result: missing initializer 


// 3. Re-declaration: only var can be redeclared
var city = "Dhaka"
var city = "Bogura"
console.log(city) // no error; result: Bogura

// let district = "Dhaka"
// let district = "Bogura"
// console.log(district) // Error (Safer!)

// const uni = "BRAC"
// const uni = "AIUB"
// console.log(uni) // Error (Safer!)

// Re-assignment: const can not be reassigned

let age = 23
age = 25

var grade = 3.65
grade = 3.70

console.log(age)
console.log(grade)

// const id = 123
// id = 456 //error (can not change a const)

// 5. Hoisting (Variable Access Before Declaration)
//• var: Hoisted but initialized as undefined.
//• let & const: Hoisted but not initialized (cannot be used before declaration).

console.log(a1); // result: undefined (var is hoisted)
var a1 = 10;
// console.log(b1); // Error (Cannot access before initialization)
// let b1 = 20;
// console.log(c1); // Error (Cannot access before initialization)
// const c1 = 30;