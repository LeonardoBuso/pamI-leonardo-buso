// função para exibir uma mensagem simples
function ExibirMsg (msg){
    console.log(msg)
}

ExibirMsg("Ai aii, cê sabee")
ExibirMsg("Cê é bot emmm")
ExibirMsg("Duzentuus")


function ExibirMsg2 (msg) {
    let mensagem = msg
    return mensagem // retorna a mensagem para ser exibida na tela
}

console.log(ExibirMsg2("O Sílis é calvo!"))

// função de soma básica
function Soma (n1 , n2)  { // declara os parâmetros do código
    return n1 + n2
}

console.log(Soma(5, 5))


// Arrow Function ou Função anônima

const Potência = (n, p) => // seta que indica uma função anônima
    {   
       return Math.pow(n, p) // math.pow trabalha com potência 
}

console.log(Potência(4,2))

// média >= 6,00 = aprovado
// média < 6,00 || >= 4,00 = Recuperação
// média < 4,00 = Reprovado

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2

    if (NotaFinal < 4.00) {
        return "Reprovado"
    }

    if (NotaFinal >= 6.00) {
        return "Aprovado"
    }

    return "Recuperação"
}

console.log(Media(6, 4))

