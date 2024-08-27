function validarTexto(texto) {
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

function criptografar() {
  const inputTexto = document.getElementById("inputTexto");
  const texto = inputTexto.value;

  if (!validarTexto(texto)) {
    document.getElementById("mensagemErro").style.display = "block";
    return;
  } else {
    document.getElementById("mensagemErro").style.display = "none";
  }

  const textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  exibirResultado(textoCriptografado);
  inputTexto.value = "";
}

function descriptografar() {
  const inputTexto = document.getElementById("inputTexto");
  const texto = inputTexto.value;

  if (!validarTexto(texto)) {
    document.getElementById("mensagemErro").style.display = "block";
    return;
  } else {
    document.getElementById("mensagemErro").style.display = "none";
  }

  const textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  exibirResultado(textoDescriptografado);
  inputTexto.value = "";
}

function exibirResultado(mensagem) {
  document.getElementById("imagemMensagem").style.display = "none";
  document.getElementById("mensagemNenhuma").style.display = "none";
  document.getElementById("mensagemSub").style.display = "none";

  const outputMensagem = document.getElementById("outputMensagem");
  outputMensagem.innerText = mensagem;
  outputMensagem.style.display = "block";

  document.getElementById("botaoCopiar").style.display = "block";
}

function copiarTexto() {
  const outputMensagem = document.getElementById("outputMensagem");
  const mensagemCopiado = document.getElementById("mensagemCopiado");
  const mensagemNenhuma = document.getElementById("mensagemNenhuma");
  const botaoCopiar = document.getElementById("botaoCopiar");

  navigator.clipboard.writeText(outputMensagem.innerText).then(() => {
    outputMensagem.style.display = "none";
    botaoCopiar.style.display = "none";
    mensagemNenhuma.style.display = "block";

    mensagemCopiado.style.display = "block";
    setTimeout(() => {
      mensagemCopiado.style.display = "none";
    }, 2000);
  });
}

function ajustarAltura(elemento) {
  elemento.style.height = "auto"; 
  elemento.style.height = (elemento.scrollHeight) + "px"; 
}


document.getElementById('inputTexto').addEventListener('input', function () {
  ajustarAltura(this);
});