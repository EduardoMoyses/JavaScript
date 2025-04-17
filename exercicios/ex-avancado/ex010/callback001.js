function numeros (a,b,callback) {
    let resultado = a * b
    callback(resultado)
}

function res (resultado) {
    console.log(resultado)
}

numeros(4,10,res)
numeros(10,20,res)

function valores (a,b,c,callback) {
    let resultado2 = a * c - b
    callback(resultado2)
}

function valores2 (resultado2,d,e,f,callback) {
    let resultado3 = d **f * e
    callback(resultado2, resultado3)
}

function res2 (resultado2,resultado3) {
    console.log(resultado3 / resultado2)
}

valores(2,3,2, function(resultado2) {
    valores2(resultado2,1,7,2,res2)
})