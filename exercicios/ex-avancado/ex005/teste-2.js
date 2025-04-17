const personagem = {
    nome: "Darkman",
    falar: function() {
        console.log("Meu nome é " + this.nome);
    }
};

personagem.falar(); // "Meu nome é Darkman"
