// Criando o array com nomes de 5 cidades
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Curitiba'];

// Função que recebe o array de cidades como parâmetro e imprime cada cidade
function listarCidades(cidadesArray: string[]): void {
    cidadesArray.forEach(cidade => {
        console.log(cidade);
    });
}

// Chamando a função passando o array de cidades
listarCidades(cidades);
