'use strict'
const numbers = [8,10,11,17,31];
let acomulador = 0;

for(let i = 0; i < numbers.length; i++) {
    acomulador += numbers[i];
}

let media = (acomulador) / 5;
console.log('la division de lo que arroja el total de numeros es: ' + media);


// B

const numbers = [8,10,11,17,31];
let acomulador = 0;
numbers[5] = 24;

for(let i = 0; i < numbers.length; i++) {
    acomulador += numbers[i];
}

let media = (acomulador) / 6;
console.log('la division de lo que arroja el total de numeros es: ' + media)


// C

const numbers = [7, 12, 13,16,18,34];

function calculate(numbers) {
    var sum = 0;
    var count = numbers.length;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / count;
}
document.write(calculate(numbers));
console.log(calculate(numbers))