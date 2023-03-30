var resultadoAnterior;          
function limparImagem(){
    document.getElementById("procurando").style.display ="none";        
}
    
function botaoCriptografar(){
    const texto = document.getElementById("texto");
    if(!texto.checkValidity()){
        mostrarErro();
        limparElemento("resultado");
    } else{
        limparElemento("mensagemErro");
        limparImagem();
        mostrarResultado(criptografar(texto));
    }
}
    
function botaoDescriptografar(){
    const texto = document.getElementById("texto");
    if(!texto.checkValidity()){
        mostrarErro();
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

function copiarTexto(){
    let textocopiado = document.getElementById("resultado");
    textocopiado.select();
    document.execCommand("copy");
}

function mostrarErro(){
    document.getElementById("demo").innerHTML = texto.validationMessage;
}

function limparElemento(id){
    document.getElementById(id).innerHTML = "";
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
