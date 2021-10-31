let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado 

function pratoSelecionada(selPrato) {
   pratoSelecionado = true 

   let sel = document.querySelector(".pratoSelecionado");

   if (sel !== null) {
        sel.classList.remove("pratoSelecionado");
   }

   selPrato.classList.toggle("pratoSelecionado");

   fecharPedido()
} 

function bebidaSelecionada(selBebida) {
    bebidaSelecionado = true 

    let sel = document.querySelector(".bebidaSelecionado");

    if (sel !== null) {
        sel.classList.remove("bebidaSelecionado");
    }
 
    selBebida.classList.toggle("bebidaSelecionado");

    fecharPedido()
}

function sobremesaSelecionada(selSobremesa) {
    sobremesaSelecionado = true

    let sel = document.querySelector(".sobremesaSelecionado");

    if (sel !== null) {
        sel.classList.remove("sobremesaSelecionado");
    }
 
    selSobremesa.classList.toggle("sobremesaSelecionado");

    fecharPedido()
}

function fecharPedido() {
    let ativado = document.querySelector(".botao")

    if (pratoSelecionado === true && bebidaSelecionado === true && sobremesaSelecionado === true) {

        ativado.disabled = false;

        ativado.innerHTML = "Fechar pedido";

        ativado.classList.add("botaoAtivo");
    }
}

function confirmarPedido() {
    let confirmado = document.querySelector(".confirmarPedido");
    let prato = document.querySelector(".pratoEscolhido");
    let bebida = document.querySelector(".bebidaEscolhida");
    let sobremesa = document.querySelector(".sobremesaEscolhida");
    let valorPrato = document.querySelector(".valorPrato");
    let valorBebida = document.querySelector(".valorBebida");
    let valorSobremesa = document.querySelector(".valorSobremesa");
    let valorTotal = document.querySelector(".valorTotal");
    let resultado = parseFloat(document.querySelector(".pratoSelecionado .valor").innerHTML) + parseFloat(document.querySelector(".bebidaSelecionado .valor").innerHTML) + parseFloat(document.querySelector(".sobremesaSelecionado .valor").innerHTML)

    confirmado.classList.remove("escondido");

    prato.innerHTML = document.querySelector(".pratoSelecionado .titulo").innerHTML;
    bebida.innerHTML = document.querySelector(".bebidaSelecionado .titulo").innerHTML;
    sobremesa.innerHTML = document.querySelector(".sobremesaSelecionado .titulo").innerHTML;
    valorPrato.innerHTML = "R$ " + parseFloat(document.querySelector(".pratoSelecionado .valor").innerHTML).toFixed(2);
    valorBebida.innerHTML = "R$ " + parseFloat(document.querySelector(".bebidaSelecionado .valor").innerHTML).toFixed(2);
    valorSobremesa.innerHTML = "R$ " + parseFloat(document.querySelector(".sobremesaSelecionado .valor").innerHTML).toFixed(2);
    valorTotal.innerHTML = "R$ " + resultado.toFixed(2)
}

function cancelarPedido() {
    let cancelar = document.querySelector(".confirmarPedido")

    cancelar.classList.add("escondido")
}

function enviarPedido() {
    let nome = prompt("Qual é o seu nome?")
    let endereco = prompt("Qual é o seu endereço?")

    let pratoE = document.querySelector(".pratoSelecionado .titulo").innerHTML
    let bebidaE = document.querySelector(".bebidaSelecionado .titulo").innerHTML
    let sobremesaE = document.querySelector(".sobremesaSelecionado .titulo").innerHTML
    let valorTotal = parseFloat(document.querySelector(".pratoSelecionado .valor").innerHTML) + parseFloat(document.querySelector(".bebidaSelecionado .valor").innerHTML) + parseFloat(document.querySelector(".sobremesaSelecionado .valor").innerHTML)
    valorTotal = "R$ " + valorTotal.toFixed(2)

    let mensagem;
    mensagem =
    `Olá, gostaria de fazer o pedido: - Prato:  ${pratoE}  - Bebida:  ${bebidaE}  - Sobremesa: ${sobremesaE} - Valor Total: ${valorTotal}  ${nome}  ${endereco}`;

    window.open("https://wa.me/+5511999999999?text=" + encodeURIComponent(mensagem));
    //abre pop-up que pode ser bloqueado
}
