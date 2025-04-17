const apiCall = new Promise((resolve) => setTimeout(resolve, 1000, "Dados da API recebidos"));
const timeout = new Promise((_, reject) => setTimeout(reject, 2000, "Timeout: operação demorou demais"));

Promise.race([apiCall, timeout]) // Retorna o resultado da Promise que resolver ou rejeitar primeiro (a mais rápida).
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro); // "Timeout: operação demorou demais"
  });
