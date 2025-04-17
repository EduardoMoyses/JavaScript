const minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Simulando uma condição
  
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Ocorreu um erro!");
    }
  });

  minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(() => {
    console.log("Fim da operação.");
  });
