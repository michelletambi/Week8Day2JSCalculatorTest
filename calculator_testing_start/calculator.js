const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};
console.log(subtract(10,5))

const multiply = (a, b) => a * b;
console.log(multiply(2,3))

const divide = (a,b ) => a /b;
console.log(divide(3,1))

function modulus(a, b){
    return a % b;
};
console.log(modulus(5,3));

const even = function(a){
    return (a % 2) == 0;
};
console.log(even(5))

const odd = (a) => a % 2 > 0;
console.log(odd(4))

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
