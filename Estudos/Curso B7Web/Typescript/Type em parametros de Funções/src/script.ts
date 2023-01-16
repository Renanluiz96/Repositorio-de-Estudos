// Type em um parametro de uma função. Voce pode definir ela dentro dos parenteses mesmo como uma tipagem numa vaiavel normal. se tiver 2 ou mais paremtros  , do mesmo jeito voce coloca a variavel depois a tipagem dela  coloca uma virgula, e novamente = (variavel:tipagem, variavel:tipagem)

//Função que retorna a primeira  letra do nome que voce enviar como parametro em Maiusculo
function  firstLetterUpperCase(name:string) {

    // Variavel que pega a primeira do parametro com o charAt na posição 0 para pegar a primeira letra. Usa um toUpperCase() para colocar como maiuscula
    let firstLetter = name.charAt(0).toUpperCase();

    //Depois ele retorna a variavel com a letra transformada, + o restante da palavra  com o substring(1) ou seja de segunda letra em diante até terminar a palavra.
    return firstLetter + name.substring(1);
}

firstLetterUpperCase('renan')
/*
//firstLetterUpperCase(90) - Se voce colocar um number ao inves de colocar uma string. E la no parametro da função não estiver especificado qual vai ser o "tipo do parametro" ele não vai acusar erro , pois ele vai automaticamente colocar o tipo como any , ai ele vai aceitar qualquer dado. Mais ao executar a função assim passando um numero vai ocasionar erro.
// Pois esta função faz coisas para uma string , que no caso era transformar a letra em maiusculo. 
//Por isto que typescript pode ser usado assim para resolver estes tipos de problemas , voce quer lidar com strings voce tipa ela para não acontecer estes tipos de erro , usar funções de strings mais passando number como parametro 
*/


//Type no retorno da função , para que alem dos parametros da função , voce pode tipar o retorno dela , logo  depois do parenteses.

// Ela retorno um number, mais tambem poderia retornar uma string se caso tambem quisesse usar uma template string. para concaternar o retorno. Ia dar erro. 
// Normalmente quando voce tipa o retorno da função , se tipa tambem os parametros tambem. Ai voce deixa a função toda tipada certinho
function somar(n1: number,n2: number): number {
    return n1 + n2
}

let resultado = somar(10, 55)