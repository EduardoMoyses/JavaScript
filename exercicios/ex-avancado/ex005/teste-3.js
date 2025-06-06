/*
function parimp(n) {
    if (n%2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(parimp(4))
*/

/*
const parimp = n => {
    if (n%2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(parimp(4))

*/

const parimp = n => n%2 === 0? "par" : "impar"
console.log(parimp(4))