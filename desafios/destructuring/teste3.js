const dados = {nome: 'rodinaldo',idade: 48, cidade: 'belo horizonte'}
const {nome: nome} = dados
console.log(nome)

let x = 10
let y = 11;
[x,y] = [y,x]
console.log(x,y)

function dados1() {
        return {
            nome1: 'rodinei',
            sobrenome: 'rodinaldo'
        }
}

const {nome1: nome2, sobrenome: sobrenome2} = dados1()
const nomecompleto = console.log(`${nome2} ${sobrenome2}`)

function temas({tema = 'claro'} = {}) {
    console.log(tema)
}

temas({tema: 'escuro'})
temas()

const informacao = {
    endereco: {
        bairro: 'Jardim Nebuloso',
        rua: 'Travessa dos Cedros',
        numero: 847
    }
}

const {
    endereco: {
        bairro: bairro,
        rua: rua,
        numero: num
    }
} = informacao

console.log(bairro)
console.log(rua)
console.log(num)

function login({usuario, senha}) {
    console.log(`usuario: ${usuario}`)
    console.log(`senha: ${senha}`)
}

login({usuario: 'darkman', senha: '123'})

const usuario = {
    nome: "João",
    idade: 30,
    email: "joao@example.com",
    ativo: true
  };
  
  function configurarUsuario(obj) {
    // Desestruturando apenas nome e email
    const { nome, email } = obj;
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
  
    // Mais tarde, desestruturando idade e ativo
    const { idade, ativo } = obj;
    console.log(`Idade: ${idade}`);
    console.log(`Ativo: ${ativo}`);
  }
  
  configurarUsuario(usuario);


const arr = [{
    
    dado1: {id: 12321, valor1: 'A1'},
    dado2: {id:434361, valor2: 'A2'}
}
    
]

const [
    {
        dado1: {valor1: val1},
        dado2: {valor2: val2}
}
] = arr

console.log(val1)
console.log(val2)

console.log(`Estou usando desconstrução para pegar e usar os valores ${val1} e ${val2} juntos e separadamete!`)

const valores = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
}

const {a: a1,b:b1, ...resto} = valores
console.log(a1, b1)
console.log(resto)