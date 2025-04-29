// let x = 0
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// recursion
function loop(x) {
    if (x >=10) {
        return;
    }

    console.log(x);
    loop(x + 1);
}
// loop(0)

// closure
const pet = function(name) {
    const getName = function() {
        return name;
    }
    return getName;
}

const myPet = pet('dog');
// console.log(myPet()); // dog

// nam conflict with scope chaining
function outsite() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

// console.log(outsite()(2)); // 4

// arguments

function myConcat(seperator) {
    let result = '';
    for(let i = 1; i < arguments.length; i++) {
        result = result + arguments[i] + seperator
    }
    return result;
}

// console.log(myConcat(' ', 'Hello', 'World', '!')); // Hello World !

function multiply(x, y) {
    y = typeof y !== "undefined" ? y : 1;
    console.log(typeof x)
    return x * y;
}

multiply(2)