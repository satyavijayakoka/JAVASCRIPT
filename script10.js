
// program-1
let names = ["amol","ram","sham","amit"]
names.push("sanjay")
console.log(names)

// program-2
let birthYear = [1989,1990,1991,1992]
let ages = []
for(let i = 0; i< birthYear.length; i++){
   // console.log(i)
   // console.log(birthYear[i])
   //console.log(2023-birthYear[i])
    let x = 2023-birthYear[i]
    ages.push(x)
}
console.log(ages)

// program-3
let marks = [77,88,56,67,79,80]
let above70 = []
for(let i=0; i< marks.length; i++){
    if(marks[i]> 70){
        above70.push(marks[i])
    }
}
console.log(above70)

// program-4
let numbers = [11,22,33]
let total =0
for(let i=0; i<numbers.length; i++){
   // console.log(numbers[i])
    total = total + numbers[i]
}
console.log(total)

// program-5
let city = ["pune","mumbai","bangalore","chennai"]
for(let i=0; i< city.length; i++){
    //console.log(city[i])
    console.log("welcome " + city[i])
}
