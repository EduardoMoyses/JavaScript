Promise.any([
    Promise.reject("erro1"),
    Promise.reject("erro2"),
    Promise.resolve("sucesso")
  ])
    .then((resultado) => console.log(resultado)) // "sucesso"
    .catch((erro) => console.error(erro)); // Não será executado


// Promise.any Retorna a primeira Promise que for resolvida com sucesso.
// Rejeita apenas se todas as Promises falharem.