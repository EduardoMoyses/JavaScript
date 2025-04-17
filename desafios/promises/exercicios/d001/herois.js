const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')
const imagens = document.querySelectorAll('img')

botao.addEventListener('click', function () {
    const persona = document.getElementById('herois').value
    for (const img of imagens) {
        img.style.display = 'none'
    }

    let descricao = ''
    let imgElement = document.getElementById(persona)

    switch (persona) {
        case 'homem-aranha':
            descricao = 'Homem-Aranha: O herói ágil e esperto que equilibra vida, dever e piadas enquanto protege Nova York.'
            break
        case 'batman':
            descricao = 'O Cavaleiro das Trevas usa medo, estratégia e tecnologia para caçar o crime em Gotham.'
            break
        case 'superman':
            descricao = 'O último filho de Krypton, um símbolo de esperança com poderes divinos e alma humana.'
            break
        case 'flash':
            descricao = 'O homem mais rápido do mundo, um cientista brilhante que desafia o tempo para salvar vidas.'
            break
        case 'deadpool':
            descricao = 'O mercenário imortal e sarcástico que luta sem regras e quebra a quarta parede.'
            break
        case 'justiceiro':
            descricao = 'O justiceiro implacável que declarou guerra ao crime após perder tudo para ele.'
            break
        default:
            descricao = 'ERRO: Escolha um personagem válido!'
            imgElement = null
    }

    mensagem.textContent = descricao

    if (imgElement) {
        imgElement.style.display = 'block'
    }
});