"use strict";
let n1 = 0;
let n2 = 1;
let upTo = 10;
let nextTerm;
console.log(`Fibonacci Series upto: ${upTo} terms are`);
for (let i = 1; i <= upTo; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
