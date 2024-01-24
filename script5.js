// conditional statements
// one i/p-------> multiple o/p's

// program-1
let numT = -13

/*if(numT > 0 && numT < 5){
    console.log("10% discount")
}
if(numT > 5 && numT < 10){
    console.log("20% discount")
}
if(numT > 10){
    console.log("30% discount")
}*/

// program-2
/*if(numT > 0 && numT < 5){
    console.log("10% discount")
}
else if(numT > 5 && numT < 10){
    console.log("20% discount")
}
else if(numT > 10){
    console.log("30% discount")
}
else{
    console.log("incorrect input")
}*/

// program-3
let marks = 92
/*if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}*/

// program-4
if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else{
    console.log("try again")
}

// program-5
let a = 10
let b = 5

if(a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}

// program-6
let x = 11
let y = 9
let z = 7
if(x>y && x>z){
    console.log("x is greater")
}
else if(y>x && y>z){
    console.log("y is greater")
}
else{
    console.log("z is greater")
}

// program-7 ternary operator

let q = 10
let r = 5
q>r ? console.log("q is greater"): console.log("r is greater")

age = 17
let q1 = age >= 18? "can drive": "cannot drive"
console.log(q1)