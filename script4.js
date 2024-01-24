// comparison operator

console.log(10 == '10')
console.log(10 === '10')
console.log(10 !== '10')
console.log(10 === 10)
console.log(10 !== 10)
console.log(10 != '10')
console.log(12 > 2)
console.log(12 >= 2)
console.log(12 < 2)
console.log(12 <= 2)
console.log(12 >= 12)
console.log(12 <= 12)
console.log(12 == 12)

// logical operator
// AND--&&, OR--||, NOT--!

console.log(3 == 3    && 8 == 8)// T&T--T
console.log(3 === '3' && 8 == 8)// F&T--F
console.log(3 !== '3' && 8 !== 8)// T&F--F
console.log(3 === '3' && 8 !== 8)// F&F--F
console.log(3 == 3    || 8 === 8)// T or T--T
console.log(3 === '3' || 8 == 8)// F or T--T
console.log(3 !== '3' || 8 !== 8)// T or F--T
console.log(3 === '3' || 8 !== 8)// F or F--F
console.log(!(3 == 3 ))//F
console.log(!(3 == 2) )//T

