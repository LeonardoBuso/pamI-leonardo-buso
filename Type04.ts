function saudacaoPadrao( nome:string, saudacaoPadrao?:string):string{
    if(saudacaoPadrao === undefined){
        saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + "," + nome + "!";
}
console.log(saudacao("João"));