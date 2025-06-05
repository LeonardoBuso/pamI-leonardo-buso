// Criando o array com nomes de 5 cidades
var cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Curitiba'];
// Função que recebe o array de cidades como parâmetro e imprime cada cidade
function listarCidades(cidadesArray) {
    cidadesArray.forEach(function (cidade) {
        console.log(cidade);
    });
}
// Chamando a função passando o array de cidades
listarCidades(cidades);
