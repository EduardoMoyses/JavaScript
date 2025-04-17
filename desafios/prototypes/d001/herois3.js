const botao = document.getElementById('botao')
const imagens = document.querySelectorAll('img')
const mensagem = document.getElementById('mensagem')

botao.addEventListener('click', () => {
    const persona = document.getElementById('herois').value
    for (const img of imagens) {
        img.style.display = 'none'
    }

    switch(persona) {
        case 'homem-aranha':
            HomemAranha.mostrarheroi()
            break
        case 'batman':
            Batman.mostrarheroi()
            break
        case 'superman':
            Superman.mostrarheroi()
            break
        case 'flash':
            Flash.mostrarheroi()
            break
        case 'deadpool':
            Deadpool.mostrarheroi()
            break
        case 'justiceiro':
            Justiceiro.mostrarheroi()
            break
        default:
            mensagem.innerHTML = 'ERRO: Defina um personagem!'
    }
})

const HomemAranha = {
    descricao: 'Homem-Aranha: O herói ágil e esperto que equilibra vida, dever e piadas enquanto protege Nova York.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const miranha = document.getElementById('homem-aranha')
        miranha.style.display = 'block'
     }
}

const Batman = {
    descricao: 'O Cavaleiro das Trevas usa medo, estratégia e tecnologia para caçar o crime em Gotham.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const batman = document.getElementById('batman')
        batman.style.display = 'block'
     }
}

const Superman = {
    descricao: 'O último filho de Krypton, um símbolo de esperança com poderes divinos e alma humana.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const superman = document.getElementById('superman')
        superman.style.display = 'block'
     }
}

const Flash = {
    descricao: 'O homem mais rápido do mundo, um cientista brilhante que desafia o tempo para salvar vidas.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const flash = document.getElementById('flash')
        flash.style.display = 'block'
     }
}

const Deadpool = {
    descricao: 'O mercenário imortal e sarcástico que luta sem regras e quebra a quarta parede.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const deadpool = document.getElementById('deadpool')
        deadpool.style.display = 'block'
     }
}

const Justiceiro = {
    descricao: 'O justiceiro implacável que declarou guerra ao crime após perder tudo para ele.',
     mostrarheroi: function () {
        mensagem.innerHTML = this.descricao
        const justiceiro = document.getElementById('justiceiro')
        justiceiro.style.display = 'block'
     }
}