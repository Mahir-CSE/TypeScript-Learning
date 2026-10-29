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

Example: */ 
function exampleLetConst() { 
    if (true) { 
        let message = "Hello, let!"; 
        const greeting = "Hello, const!"; 
        var check = "Var works"
    } 
    //console.log(check)  // It will work properly
    //console.log(message);  // Error: Not accessible outside block 
    //console.log(greeting); // Error: Not accessible outside block 
} 
exampleLetConst(); 
