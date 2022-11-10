//JSON.parse() = a função parse do json ela vai pegar uma string de json , e vai transformar em um json "real"

//Resumindo vai pegar uma string e transformar em um json.

//Quando voce faz uma requisição json voce recebe um texto , um json puro = um json em formato de sting , Ex;
//  '{"nome": "renan", "idade": 90}' // Aqui é uma string
//{nome: 'renan', idade: 90} // Aqui ja seria um json real que quando a função parse transforma ela sai daquela maneira ali de cima e fica neste formato "sem as aspas" na propriedade.

let pessoa = JSON.parse('{"nome": "renan", "idade": 90}')
