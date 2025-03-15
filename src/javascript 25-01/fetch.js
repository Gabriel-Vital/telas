async function buscaDados() {
  const dados = await fetch("https://viacep.com.br/ws/01001000/json/");

  return dados;
}

buscaDados();
