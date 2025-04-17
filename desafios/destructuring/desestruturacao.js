const foo = ['um', 'dois', 'três']

const [um,dois,tres] = foo

console.log(um)
console.log(dois)
console.log(tres)

let a, b

[a,b] = [1,2]

console.log(a)
console.log(b)

let d,e,f

[d=4,e=5,f=6] = [14,undefined,16]

console.log(d,e,f)

let x = 10
    y = 11
let temp

[x,y] = [y,x]

console.log(x,y)

// temp = x
// x = y
// y = temp

//? desestruturação de OBJ

const o = {p: 42, q: true}
const {p,q} = o

console.log(p,q)

let g, h

({g,h} = {g:50, h:100})

console.log(g,h)

const {j=400, k=500} = {j:460}

console.log(j,k)



const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localizacao_tags: [ ],
            last_edit: "2024-04-14T08:43:37",
            url: "/de/docs/tools/Scratchpad",
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
}

const {title: englishTitle, translations: [{title: LocalTtitle}]} = metadata

console.log(englishTitle)
console.log(LocalTtitle)

let key = 'z'
let {[key]:faa} = {z: 'bar'}
console.log(faa)