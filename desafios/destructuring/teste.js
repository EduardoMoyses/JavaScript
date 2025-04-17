const foo = [2,5,10,'oi']
const [a,b,c,d] = foo
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let e,f
[e,f] = [12,13]
console.log(e)
console.log(f)

let x,z
[x=18,z=15] = [undefined,20]
console.log(x)
console.log(z)

const aaa = {k: 'oi',y: 'ronaldo'}
const {k,y} = aaa

console.log(k,y)