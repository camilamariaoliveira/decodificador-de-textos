function botaoCriptografar(){
    const texto = document.getElementById("texto");
    if(texto.validity.patternMismatch){
        mostrarErro(texto);
        limparElemento("resultado");
    } else{
        limparElemento("mensagemErro");
        limparImagem();
        mostrarResultado(criptografar(texto));
    }
}
    
function botaoDescriptografar(){
    const texto = document.getElementById("texto");
    if(texto.validity.patternMismatch){
        mostrarErro(texto);
        limparElemento("resultado");
    } else{
        limparElemento("mensagemErro");
        limparImagem();
        mostrarResultado(descriptografar(texto));
    }
}

function mostrarResultado(mensagem){
    document.getElementById("resultado").innerHTML=mensagem;
}

function mostrarErro(texto){
    texto.setCustomValidity("Apenas letras minúsculas e sem acento!");
    document.getElementById("mensagemErro").innerHTML = texto.validationMessage;
}

function limparElemento(id){
    document.getElementById(id).innerHTML = "";
}

function limparImagem(){
    document.getElementById("procurando").style.display ="none";
}

function criptografar(texto){
    var mensagem = texto.value;
    mensagem = mensagem.replaceAll("e", "enter");
    mensagem = mensagem.replaceAll("i", "imes");
    mensagem = mensagem.replaceAll("a","ai");
    mensagem = mensagem.replaceAll("o", "ober");
    mensagem = mensagem.replaceAll("u", "ufat");
    return mensagem;
}

function descriptografar(texto){
    var mensagem = texto.value;
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ai","a");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");
    return mensagem;
}

function copiarTexto(){
    let textocopiado = document.getElementById("resultado");
    textocopiado.select();
    document.execCommand("copy");
}