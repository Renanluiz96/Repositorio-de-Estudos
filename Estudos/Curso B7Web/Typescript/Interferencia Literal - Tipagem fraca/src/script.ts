//Interferencia Literal = É quando o typescript , ele te fala que por exemplo o type que voce esta mandando pra ele esta fraco. Que pode dar problema. E o que pode se fazer é voce criar um type especifico , e colocando que a função ou variavel só vai receber aquele type. Então se for algo diferente daquele type ele pode até dizer que esta fraco(sujeito a alterações), que podem dar problema futuramente.

//Fazendo uma função que vai receber uma requisição onde vai receber um url string, e um method que vai ser do tipo 'GET' ou 'Post'
function fazerRequisicao(url: string, method: 'GET'| 'POST') {
    // ............
}

//Criei um type especifico onde vai receber as propriedades do parametro , somente o que tiver aqui dentro . Fazendo isto eu estou especificando mais ainda o que eu quero , com isto o typescript entende que não vou poder usar outra coisa alem disto, e não vai continuar reclamando que a tipagem esta fraca.
type RequestDetails = {
    url: string,
    method: 'GET'| 'POST'
}

//Aqui estou criando a variavel que vai receber o type criado antes, e a url vai ser a string, e o method vai ser 'GET' , de uma forma bem especifica mesmo.
let req: RequestDetails = {
    url: 'http://www.google.com.br',
    method: 'GET'
};


//Ai por fim  usando a função fazendo a requisição usando a variavel com o objeto que criei , usando os types especificos, para não dar problema.
fazerRequisicao(req.url, req.method);