function somarTudo(...numeros){
    return numeros.reduce((total,num) => total + num, 0);
}
console.log(somarTudo(1,2,3,4));