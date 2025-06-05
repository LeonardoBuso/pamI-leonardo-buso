// Definindo a classe Livro com tipos nos parâmetros do construtor
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    return Livro;
}());
// Criando um objeto do tipo Livro 
var livroExemplo = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
// Função para exibir as informações do Livro no console
function exibirLivro(livro) {
    console.log("Título: " + livro.titulo);
    console.log("Autor: " + livro.autor);
    console.log("Ano de Publicação: " + livro.anoPublicacao);
}
// Chamando a função para exibir o livro no console
exibirLivro(livroExemplo);
