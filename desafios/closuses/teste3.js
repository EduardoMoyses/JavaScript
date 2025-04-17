function soma(passo) {
    let total = 0
    return function () {
        total += passo * 2
        console.log(`O valor total é: ${total}`)
    }
}

const res = soma(2)
res()
res()
res()
res()

function login(max) {
    let tentativas = max
    return function() {
        if(tentativas > 0) {
            tentativas-- // oposto de i++ (i--)
            console.log('ainda pode')
        } else {
            console.log('bloqueado')
        }
    }
}

const Login = login(3)
Login()
Login()
Login()
Login()

function multiplicador(num) {
    let total = num
    return function (valor) {
        total *= valor
        console.log(total)
    }
}

const result = multiplicador(2)
result(3)
result(10)
result(5)
