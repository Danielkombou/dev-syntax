// an array is an iterable
var arr = [ 10, 20, 30 ];

for (let val of arr) {
    console.log(`Array value: ${ val }`);
}




function myFunc(theObject) {
    theObject.make = "Toyota"
}
const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };


console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);