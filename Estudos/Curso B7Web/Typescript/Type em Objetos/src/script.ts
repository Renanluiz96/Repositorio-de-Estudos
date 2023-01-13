//Type em Objetos = Voce tipa as propriedades do objeto na função colocando o objeto: {propriedade: tipagem, propriedade: tipagem}. Voce coloca os : pontos e se colocar somente uma tipagem assim = (usuario: string), então ele vai interpretar que todos as propriedades deste objeto são do tipo string. Mais se tiver numeros , ai voce ai ter que tipar de um em um , e o numero voce coloca tipo number normal .
// Se voce tem uma propriedade do objeto e não tipa ela como o "outro" ali do objeto , e voce não usa ele na função voce não precisa tipar ele na função como os outro , mais caso voce 'usar' esta propriedade ai sim vai ter que tipar ela.

let u = {
    nome: 'renan',
    //idade: 90, - Colocar ele como parametro opcional  na função voce coloca uma intorragação '?'
    outro: 'outra coisa'
}

function resumo(usuario: {nome:string, idade?: number}) { // Nesta função  o objeto vai ter uma propriedade obrigatoria, e a segunda propriedade que tem o ? ela é opcional .

    // aqui faz uma verificação se no objeto que eu estou recebendo tem uma propriedade idade eu uso assim o codigo , ja que ele é opcional eu retorno uma mensagem com a propriedade que pode ou não ter ,pois ela é opcional. Então não é obrigatorio ela ter , se tiver ela executa colocando a propriedade opcional
    if(usuario.idade !== undefined) { // Se a propriedade idade for diferente de indefinido - ou seja existe esta propriedade , então retorna este codigo abaixo
        return `Ola ${usuario.nome}, tudo bem? voce tem ${usuario.idade} anos`;
    } else { // se não tiver a propriedade opcional ele retorna somente o nome sem o opcional. 
        return `Ola ${usuario.nome} tudo bem?`
    }
}

resumo(u)