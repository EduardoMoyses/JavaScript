const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')

botao.addEventListener('click', function () {
    mensagem.textContent = ''
    const Promessa = (msg, tempo) => 
        new Promise(resolve => {
            setTimeout(() => resolve(msg), tempo);
        });

    [ 
        Promessa('deu certo1!', 500),
        Promessa('deu certo2!', 2000),
        Promessa('deu certo3!', 4000)
    ].forEach(p => 
        p.then(res => mensagem.textContent += res + '\n')
    );
})