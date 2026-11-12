let a:number = 20, b:number=15

//Arithmatic Operators
console.log("*******Arithmatic Operators*******")
console.log("Addition: ",a+b)
console.log("Subtraction: ",a-b)
console.log("Multiplication: ",a*b)
console.log("Division: ",a/b)
console.log("Modulus: ",a%b)
console.log("Exponential: ",a**b)

//Assignment Operators
console.log("********Assignment Operators********")
a = 10
b = 5

// Assignment operator
a += b  // a = a + b
console.log(a)

console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)

//Relational Operators
console.log("********Relational Operators********")
a = 10
b = 20
let c:any = "10"
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === b)
console.log(a == c)
console.log(a === c)

//Logical Operators
console.log("********Logical Operators********")
let x1:boolean=true
let y1:boolean=false

console.log(x1 && y1)
console.log(x1 || y1)
console.log(!x1)
console.log(!y1)

//Combination of logical and relational operators
console.log("*******Combination of logical and relational operators**********")

console.log(20>10 && 10>5)
console.log(5>10 && 20>10)
console.log(8>3 && 5 >9)
console.log(2>6 && 5 >9)

console.log(20>10 || 10>5)
console.log(5>10 || 20>10)
console.log(8>3 || 5 >9)
console.log(2>6 || !(5 >9))

// Increment and decrement operators

// Post Increment: Value will assign first and then increment occurs
console.log("Post Increment")
let x2:number = 10
let res1:number = x2++
console.log(x2)
console.log(res1)

// pre Increment: First the increment will occur and then value will be assigned
console.log("Pre Increment")
let y2:number = 5
let res2:number = ++y2
console.log(y2)
console.log(res2)

// Ternary/Conditional operator:
console.log("Ternary Operator")
let x3:number=25
let y3:number=28

let res3:number = (x3>y3) ? x3 : y3
console.log("Larger: ",res3)
