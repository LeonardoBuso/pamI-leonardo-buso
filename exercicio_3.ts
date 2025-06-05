// Definindo a classe Livro com tipos nos parâmetros do construtor
class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
}

// Criando um objeto do tipo Livro 
let livroExemplo: Livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);

// Função para exibir as informações do Livro no console
function exibirLivro(livro: Livro): void {
    console.log("Título: " + livro.titulo);
    console.log("Autor: " + livro.autor);
    console.log("Ano de Publicação: " + livro.anoPublicacao);
}

// Chamando a função para exibir o livro no console
exibirLivro(livroExemplo);
