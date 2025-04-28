// an array is an iterable

// arr.push(23)
console.log(test1)
var test1 = "hoisted"
console.log(test1)


var arr = [ 10, 20, 30 ];
for (let val of arr) {
    console.log(`Array value: ${ val }`);
}


let income = 100
const  interest = 0.2
income += 500
console.log(income)
// interest += 0.01
// console.log('ERROR: ', + interest)

function myFunc(theObject) {
    theObject.make = "Toyota"
}
const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };


// console.log(myCar.make);
// myFunc(myCar);
// console.log(myCar.make);
