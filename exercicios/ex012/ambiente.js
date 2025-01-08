let num = [5, 8,2,3,6]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento é ${num[0]}`)

var pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}