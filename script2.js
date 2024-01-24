// function without parameter without return type

function additionA(){
    console.log(9+9)
}
additionA()
additionA()

// function with parameter without return type

function additionB(x,y){
    console.log(x+y)
}
additionB(7,5)
additionB(4,2)

// function with parameter with return type

function additionC(x,y){
    return x+y
}
let a = additionC(3,1)
console.log(a)
console.log(a*0.10)
console.log(a+a)