const valores = ['oi','adamastor','rodinei']

const [chamada,nome1,nome2] = valores

console.log(chamada)
console.log(nome1)
console.log(nome2)

let a,b

[a,b] = [1,2]

console.log(a + b)

let c,d

[c=3,d=2] = [10]

console.log(c + d)

const res = {a1: 'primeiro', b1: 'segundo'}

const {a1,b1} = res

console.log(a1)
console.log(b1)

let x,y

({x,y} = {x:20,y:30})

console.log(x * y)