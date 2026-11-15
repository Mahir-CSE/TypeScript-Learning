// Example 01: Number is even or odd

let num1:number = 9;

if (num1%2==0){
    console.log("EVEN Number")
}
else{
    console.log("ODD Number")
}


// Example 02: Larger Number between 3

let n1:number = 9
let n2:number = 9
let n3:number = 9

if(n1>n2){
    if(n1>n3){
        console.log("Largest Number is: ",n1)
    }
    else{
        console.log("Largest Number is: ",n3)
    }
}
else if(n2>n3){
    console.log("Largest Number is: ",n2)
}
else{
    console.log("Largest Number is: ",n3)
}


// Example 04: Depending on marks display the appropriate grade

let marks:number = 87

if(marks >=91 && marks <=100){
    console.log("Grade: A+")
}
else if(marks >=81 && marks<= 90){
    console.log("Grade: A")
}
else if(marks >=71 && marks<= 80){
    console.log("Grade: A-")
}
else if(marks >=61 && marks<= 70){
    console.log("Grade: B+")
}
else if(marks >=51 && marks<= 60){
    console.log("Grade: B")
}
else if(marks >=41 && marks<= 50){
    console.log("Grade: B-")
}
else if(marks >=0 && marks<=40){
    console.log("Grade: D")
}
else{
    console.log("Invalid")
}


// Example 05: Using ternary operator
let e1: number = 12
let e2: number = 15
let e3: number = 18

let max_e: string = e1 > e2 ? "E1 Larger" : e2 > e3 ? "E2 Larger" : "E3 Larger"
console.log(max_e)

// Example 06: Switch

let day_no:number = 1

switch(day_no){
    case 1:
        console.log("Monday")
        break;

    case 2:
        console.log("Tuesday")
        break;

    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;
    
    case 5:
        console.log("Friday")
        break;

    case 6:
        console.log("Saturday")
        break;
    
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid day")
         
}