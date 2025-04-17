const listadenumeros = [1,2,2]

const somartresnumeros = (num1,num2,num3) => {
    return num1 + num2 + num3
}

console.log(somartresnumeros(...listadenumeros))

const listadenumeros1 = [1,2,3]

const listadenumeros2 = [4,5,6]

const listadenumerostotal = [...listadenumeros1, ...listadenumeros2]

console.log(listadenumerostotal)

const obj1 = {a:1,b:1}
const obj2 = {c:3,d:4}

const copyobj = {...obj1, ...obj2}

console.log(copyobj)