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
console.log(myPet()); // dog