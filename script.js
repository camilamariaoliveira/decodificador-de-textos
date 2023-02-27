var resultadoAnterior;          
function traduzido(){
    document.getElementById("procurando").style.display ="none";        
}
    
function criptografar(){
    var mensagem = document.getElementById("texto").value;
    traduzido();
    mensagem = mensagem.replaceAll("e", "enter");
    mensagem = mensagem.replaceAll("i", "imes");
    mensagem = mensagem.replaceAll("a","ai");
    mensagem = mensagem.replaceAll("o", "ober");
    mensagem = mensagem.replaceAll("u", "ufat");
    mostraResultado(mensagem);
}
    
function descriptografar(){
    var mensagem = document.getElementById("texto").value;
    traduzido();
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ai","a");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");
    mostraResultado(mensagem);
}

function mostraResultado(mensagem){
    document.getElementById("resultado").innerHTML=mensagem;
}

function copiarTexto(){
    let textocopiado = document.getElementById("resultado");
    textocopiado.select();
    document.execCommand("copy");
}