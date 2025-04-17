const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')
const imagens = document.querySelectorAll('img')

class Herois {
    constructor() {
        this.botao = botao
        this.mensagem = mensagem
        this.imagens = imagens

        botao.addEventListener('click', () => {
            this.selecionarHeroi()
        })
    }

    selecionarHeroi() {
        const persona = document.getElementById('herois').value

        for (const img of this.imagens) {
            img.style.display = 'none'
        }

        switch (persona) {
            case 'homem-aranha':
                new HomemAranha().mudartexto()
                break
            case 'batman':
                new Batman().mudartexto()
                break
                case 'superman':
                    new Superman().mudartexto()
                    break
                case 'flash':
                    new Flash().mudartexto()
                    break
                case 'deadpool':
                    new Deadpool().mudartexto()
                    break
                case 'justiceiro':
                    new Justiceiro().mudartexto()
                    break
            default:
                this.mensagem.innerHTML = 'Escolha um herói válido!'
        }
    }
}

class HomemAranha extends Herois {
    mudartexto() {
        this.mensagem.innerHTML = 'Homem-Aranha: O herói ágil e esperto que equilibra vida, dever e piadas enquanto protege Nova York.'

        const miranha = document.getElementById('homem-aranha')
        miranha.style.display = 'block'
    }
}
class Batman extends Herois {
    mudartexto() {
        this.mensagem.innerHTML = 'O Cavaleiro das Trevas usa medo, estratégia e tecnologia para caçar o crime em Gotham.'

        const miranha = document.getElementById('batman')
        miranha.style.display = 'block'
    }
}

class Superman extends Herois {
    mudartexto() {
    this.mensagem.innerHTML = 'O último filho de Krypton, um símbolo de esperança com poderes divinos e alma humana.'
    const superman = document.getElementById('superman')
    superman.style.display = 'block'
}

}

class Flash extends Herois {
    mudartexto() {
        this.mensagem.innerHTML = 'O homem mais rápido do mundo, um cientista brilhante que desafia o tempo para salvar vidas.'
        const flash = document.getElementById('flash')
        flash.style.display = 'block'
    }
}

class Deadpool extends Herois {
    mudartexto() {
        this.mensagem.innerHTML = 'O mercenário imortal e sarcástico que luta sem regras e quebra a quarta parede.'
        const deadpool = document.getElementById('deadpool')
        deadpool.style.display = 'block'
    }
}

class Justiceiro extends Herois {
    mudartexto() {
        this.mensagem.innerHTML = 'O justiceiro implacável que declarou guerra ao crime após perder tudo para ele.'
        const justiceiro = document.getElementById('justiceiro')
        justiceiro.style.display = 'block'
    }
}

new Herois()