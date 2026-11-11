// Statically types VS Dynamically Types

// Typescript is statically typed; Provides compile time error for wrong datatype

//Example 01:
// let var1 = 25
// var1 = "Dhaka"

//Example 02:

// let var2:number = 77
// var2 = 23
// var2 = "Twenty Three" 

// Typesafety
// Example 03:

// let num1:number = "5"+3
// console.log(num1) // Error

console.log("DataTypes - Primitive")



//Example 01: Number datatype
console.log("Number")
let n1:number = 12
let n2:number = 15.866969
let n3:number = 0
let n4:number = 0.738732937
let n5:number = 68123643219472394

console.log(n1)
console.log(typeof(n1))
console.log(n2)
console.log(typeof(n2))
console.log(n3)
console.log(typeof(n3))
console.log(n4)
console.log(typeof(n4))
console.log(n5)
console.log(typeof(n5))

//Example 02: String datatype
console.log("String")

let s1:string='Mahir'
let s2:string="Niloy"
let s3:string= `Hello ${s1} ${s2}`

console.log(s1)
console.log(typeof(s1))
console.log(s2)
console.log(typeof(s2))
console.log(s3)
console.log(typeof(s3))

//Example 03: Boolean datatype

let b1:boolean=true
let b2:boolean=false

console.log(b1)
console.log(typeof(b1))
console.log(b2)
console.log(typeof(b2))

//Example 04: null and undefined
let u1:null=null;
let u2:undefined=undefined;

console.log(u1)
console.log(typeof(u1)) //object type
console.log(u2)
console.log(typeof(u2)) //Undefined type

//Example 05: Any type
let a1:any = "Mahir"
console.log(a1)
console.log(typeof(a1))
a1 = true
console.log(a1)
console.log(typeof(a1))
a1 = 56
console.log(a1)
console.log(typeof(a1))

console.log(a1) //Output will be the latest value of a1 variable

// Example 06: Union Type
let a2: string | number | boolean
a2 = "Mahir"
a2 = 73

console.log(a2)
console.log(typeof(a2))

// Example 07: Void Type -> Used in function where there is nothing to return

// Nothing to return -> void type
function sum(t1: number, t2:number):void{
    console.log(t1+t2)
}

sum(5,3)

// returns a number -> number type
function sub(t1: number, t2:number):number{
    let result:number=t1-t2
    return result
}

let res:number = sub(5,3)
console.log(res)