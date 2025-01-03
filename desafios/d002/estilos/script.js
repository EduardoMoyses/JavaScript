function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (ano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('isex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else if (idade > 50) {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adoles-f.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else if (idade > 50) {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}