const str = "Linha de texto 1\n" +  // \n pula para linha de baixo
"linha de texto 2"

// usando TemplateString

const strTemplatString = `linha de texto 3
linha de texto 4
`
console.log(str)
console.log(strTemplatString)

/*
    outro exemplo

const nome = 'Rodinei Rodinaldo'
const idade = 2025 - 2006
const txt = "Olá, eu sou " + nome + ". \nE tenho " + idade + " anos."
console.log(txt)
*/

// agr com TemplateString

const nome = 'Rodinei Rodinaldo'
const idade = 2025 - 2006
const txtTamplateString = `Olá, eu sou ${nome}.
E tenho ${idade} anos.`

 console.log(txtTamplateString)
