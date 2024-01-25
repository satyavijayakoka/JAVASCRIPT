
let i1 =1
while(i1<=5){
    console.log(i1)
    if(i1==3){
        break
    }
    i1++
}

let i2=1
while(i2<=5){
    if(i2==3){
        i2++
        continue
    }
    console.log(i2)
    i2++
}

// switch without break
let city = "jaipur"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
     case "indore":
        console.log("MP")
    default:
        console.log("incorrect city name")

}
//switch with break
let city2= "lucknow"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
     case "indore":
        console.log("MP")
        break
     case "lucknow":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")

}

// program-3
let city3 = "nagpdsadaus"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
     case "indore":
     case "bhopal":
        console.log("MP")
        break
     case "lucknow":
     case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")

}

// program-4
let x1 = 1000
let x2 = 50000
let x3 = 200
let greater = true

if(x1>x2 && x1>x3){
    console.log("x1 is greater")
}
else if(x2>x3 && x2>x1){
    console.log("x2 is greater")
}
else{
    console.log("x3 is greater")
}

switch(greater){
    case x1>x2 && x1>x3 :
        console.log("x1 is greater")
        break
    case x2>x3 && x2>x1 :
         console.log("x2 is greater")
         break
    default:
         console.log("x3 is greater")
}
