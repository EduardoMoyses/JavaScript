const cincomil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise cincomil resolvida.'), 5000);
});

const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise mil resolvida.'), 1000);
});

const quinhentos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise quinhentos resolvida.'), 500);
});

const cem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise cem resolvida.'), 100);
});

const resolvedoradepromiseassincronas = () => {
    cincomil()
        .then((resultado1) => {
            console.log(resultado1); // Exibe o resultado de cincomil após 5 segundos
            return mil();
        })
        .then((resultado2) => {
            console.log(resultado2); // Exibe o resultado de mil após mais 1 segundo
            return quinhentos();
        })
        .then((resultado3) => {
            console.log(resultado3); // Exibe o resultado de quinhentos após mais 500ms
            return cem();
        })
        .then((resultado4) => {
            console.log(resultado4); // Exibe o resultado de cem após mais 100ms
        })
        .catch((erro) => {
            console.error('Ocorreu um erro:', erro);
        });
};

// Chamar a função para resolver as Promises
resolvedoradepromiseassincronas();
