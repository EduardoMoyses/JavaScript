const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
    mensagem.textContent = '';

    const criarPromessa = (msg, tempo) => 
        new Promise(resolve => {
            setTimeout(() => resolve(msg), tempo);
        });

    [ 
        criarPromessa('Tarefa 1 concluída!', 500),
        criarPromessa('Tarefa 2 concluída!', 2000),
        criarPromessa('Tarefa 3 concluída!', 4000)
    ].forEach(p => 
        p.then(res => mensagem.textContent += res + '\n')
    );
});

/*
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
    mensagem.textContent = ''; // Limpa antes de começar

    const criarPromessa = (msg, tempo) => 
        new Promise(resolve => {
            setTimeout(() => resolve(msg), tempo);
        });

    [ 
        criarPromessa('Tarefa 1 concluída!', 500),
        criarPromessa('Tarefa 2 concluída!', 2000),
        criarPromessa('Tarefa 3 concluída!', 4000)
    ].forEach(p => 
        p.then(res => mensagem.textContent += res + '\n')
    );
});
*/