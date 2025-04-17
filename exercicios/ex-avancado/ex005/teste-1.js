/* 
teste de arrow functions

normal

function dobro(n) {
return n * 2;
}

function saudacao(nome) {
return "Olá, " + nome;
}
*/

// arrow function

const dobro = n => n*2
console.log(dobro(4))

const saudacao = nome => "olá " + nome
console.log(saudacao("Rodinei"))