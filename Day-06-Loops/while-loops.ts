// Basic while loop:
console.log("**** While Loop ****")
let x1: number =7

while(x1<=5){
    console.log(x1)
    x1++
}

// Do While loop
console.log("**** Do-While Loop ****")
let x2:number = 7
do{
    console.log(x2)
    x2++
}while(x2<=5)


// Print only even numbers between 1-10
console.log("**** Print only even numbers between 1-10 ****")
let x3:number = 2

while(x3<=10){
    console.log(x3)
    x3=x3+2
}


// Print only even numbers between 1-10

console.log("**** Print only even numbers between 1-10 ****")
let x4:number = 1
while(x4<=10){
    if(x4%2==0){
        console.log(x4)
    }
    x4++
}

// Reverse printing by while loop

console.log("**** Reverse Printing by while loop ****")
let x5 = 10
while (x5>=1){
    console.log(x5)
    x5--
}
