// Global

let pratos;
let bebidas;
let sobremesas;

// Função que adiciona layout de selecionado a um dos pratos
function selecionarPrato(elemento) {
  const marcado = document.querySelector(".pratos").querySelector(".deugreen");
  if (marcado !== null) {
    document
      .querySelector(".pratos")
      .querySelector(".escolhido")
      .classList.remove("escolhido");
    marcado.classList.remove("deugreen");
    marcado.querySelector(".escondido").classList.remove("icone");
  }
  elemento.classList.add("escolhido");
  elemento.querySelector(".selecionado").classList.add("deugreen");
  elemento.querySelector(".escondido").classList.add("icone");

  // Condição para botão de Finalizar o Pedido ficar verde quando o prato é escolhido por último
  pratos = true;
  if (pratos && bebidas && sobremesas) {
    document.querySelector(".alerta").classList.add("finalizarPedido");
    document.querySelector(".alerta").innerHTML = "Fechar Pedido";
    document.querySelector(".alerta").removeAttribute("disabled");
  }
}

// Função que adiciona layout de selecionado a uma daos bebidas
function selecionarBebida(elemento) {
  const marcado = document.querySelector(".bebidas").querySelector(".deugreen");
  if (marcado !== null) {
    document
      .querySelector(".bebidas")
      .querySelector(".escolhido")
      .classList.remove("escolhido");
    marcado.classList.remove("deugreen");
    marcado.querySelector(".escondido").classList.remove("icone");
  }
  elemento.classList.add("escolhido");
  elemento.querySelector(".selecionado").classList.toggle("deugreen");
  elemento.querySelector(".escondido").classList.add("icone");

  // Condição para botão de Finalizar o Pedido ficar verde quando a bebida é escolhida por último
  bebidas = true;
  if (pratos && bebidas && sobremesas) {
    document.querySelector(".alerta").classList.add("finalizarPedido");
    document.querySelector(".alerta").innerHTML = "Fechar Pedido";
    document.querySelector(".alerta").removeAttribute("disabled");
  }
}

// Função que adiciona layout de selecionado a uma das sobremesas
function selecionarSobremesa(elemento) {
  const marcado = document
    .querySelector(".sobremesas")
    .querySelector(".deugreen");
  if (marcado !== null) {
    document
      .querySelector(".sobremesas")
      .querySelector(".escolhido")
      .classList.remove("escolhido");
    marcado.classList.remove("deugreen");
    marcado.querySelector(".escondido").classList.remove("icone");
  }
  elemento.classList.add("escolhido");
  elemento.querySelector(".selecionado").classList.toggle("deugreen");
  elemento.querySelector(".escondido").classList.add("icone");

  // Condição para botão de Finalizar o Pedido ficar verde quando a sobremesa é escolhida por último
  sobremesas = true;
  if (pratos && bebidas && sobremesas) {
    document.querySelector(".alerta").classList.add("finalizarPedido");
    document.querySelector(".alerta").innerHTML = "Fechar Pedido";
    document.querySelector(".alerta").removeAttribute("disabled");
  }
}

// Função que recebe o texto de valor de um produto e retorna o valor em número
function pegaNumero(valor) {
  valor = valor.replace("R$ ", "");
  valor = Number(valor.replace(",", "."));
  return valor;
}

// Função que coleta os nomes e preços dos produtos selecionados e envia menssagem pro whatsapp
function menssagem() {
  prato = document
    .querySelector(".pratos")
    .querySelector(".escolhido")
    .querySelector("h2").innerText;
  bebida = document
    .querySelector(".bebidas")
    .querySelector(".escolhido")
    .querySelector("h2").innerText;
  sobremesa = document
    .querySelector(".sobremesas")
    .querySelector(".escolhido")
    .querySelector("h2").innerText;
  let precoPrato = document
    .querySelector(".pratos")
    .querySelector(".escolhido")
    .querySelector("h3").innerText;
  let precoBebida = document
    .querySelector(".bebidas")
    .querySelector(".escolhido")
    .querySelector("h3").innerText;
  let precoSobremesa = document
    .querySelector(".sobremesas")
    .querySelector(".escolhido")
    .querySelector("h3").innerText;
  let valorTotal =
    pegaNumero(precoPrato) +
    pegaNumero(precoBebida) +
    pegaNumero(precoSobremesa);
  valorTotal = "R$ " + valorTotal.toFixed(2);
  let str = `Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: ${valorTotal}`;
  window.location.href = `https://wa.me/5522981687770?text=${encodeURIComponent(
    str
  )}`;
}
