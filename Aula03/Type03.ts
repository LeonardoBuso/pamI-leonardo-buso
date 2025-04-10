function saudacao(nome,saudacaoPadrao) {
    if (saudacaoPadrao == undefined){
        saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + "," + nome + "!";
}
console.log(saudacao("João"));
