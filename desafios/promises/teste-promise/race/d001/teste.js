// Simulação de uma chamada de API
function fetchDadosDaAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dados carregados com sucesso!");
      }, 5000); // API demora 5 segundos
    });
  }
  
  // Promessa de timeout (limite de 3 segundos)
  function timeoutPromise(tempo) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Tempo esgotado! Tente novamente mais tarde.");
      }, tempo);
    });
  }
  
  // Usando Promise.race para decidir qual ação será executada
  Promise.race([fetchDadosDaAPI(), timeoutPromise(3000)])
    .then((resultado) => {
      // Exibindo os dados da API mais rápida
      document.getElementById("conteudo").innerHTML = `<p>${resultado}</p>`;
    })
    .catch((erro) => {
      // Exibindo mensagem de erro por timeout
      document.getElementById("conteudo").innerHTML = `<p style="color: red;">${erro}</p>`;
    });
  