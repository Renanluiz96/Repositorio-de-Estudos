// Types Literais = Onde voce vai dizer aquele item especifico , e enclusive o "valor" deste item especifico. Bastante usados com union types, onde voce pode declarar , que o tipo pode por exemplo ou uma string com um valor especifico , ou uma outra string com outro valor especifico, ou seja se for algo diferente desses dois vai dar erro.

//Aqui por exemplo criei um type proprio , que vai conter um objeto  com um width , e height .Criei apenas para simplificar o codigo na hora de usar
type Opcoes = {
    width: number,
    height: number
}

//E Esta função vai receber um parametro que ela especificamente(Literal) ela pode receber 2 tipos , 1 aquele type que criei(o objeto com as 2 propriedades), ou uma string com o conteudo de 'auto'
function configurar(props: Opcoes | 'auto') {

}

//Usando a função com o parametro do conteudo do type Opcoes.
configurar({width: 100, height: 200})


// Usando a função com o parametro que pode receber uma string com o conteudo 'auto'
configurar('auto')