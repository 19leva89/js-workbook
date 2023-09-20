console.log(Math.PI)

const a = 5;
const b = 10;
const c = -5;
const arr = [20, 30, 40];

console.log(Math.max(a, b, c, ...arr));
console.log(Math.min(a, b, c, ...arr));

console.log(Math.sign(c));

console.log(Math.pow(a, 3));

console.log(Math.sqrt(16));

console.log(Math.floor(1.156), Math.floor(1.456), Math.floor(1.956));
console.log(Math.ceil(1.156), Math.ceil(1.456), Math.ceil(1.956));
console.log(Math.round(1.156), Math.round(1.456), Math.round(1.956));
console.log(Math.trunc(1.156), Math.trunc(1.456), Math.trunc(1.956));

const random = Math.trunc(Math.random() * 100) + 1;
console.log(random);


console.log(0.1 + 0.2);                                     // Виведе 0.30000000000000004
console.log(0.3);                                           // Виведе 0.3
console.log(Math.fround(0.1 + 0.2));                        // Виведе 0.30000001192092896
console.log(Math.fround(0.3));                              // Виведе 0.30000001192092896
console.log(0.1 + 0.2 === 0.3);                             // Виведе false
console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));   // Виведе true