let n1:number=0
let n2:number = 1
let upTo:number = 10
let nextTerm:number;

console.log(`Fibonacci Series upto: ${upTo} terms are`)

for(let i=1; i <= upTo; i++){
    console.log(n1)
    nextTerm = n1+n2
    n1=n2
    n2=nextTerm
}

