//Trabalhando com datas 
//Tem uma classe(objeto) chamado date que tem varias funções , formas de formatar ... diversas coisas relacionais a datas = Dias da semana, semana,  meses, ano , hora , segundos, fuso-horario. Todas essas informações voce consegue pegar com este objeto "Date"

//Para criar um objeto voce usa o "new" e ao lado coloca o nome do objeto
//Quando voce declara o objeto date , ele por padrão ja vem com a data atual em que ele foi criado do dispositivo que ele esta acessando , computador ou celular do hardware que esta acessado o site naquele momento.

/*Quando voce declara o objeto date voce pode passar 7 parametros nele :
   1º - Ano
   2º - Mes = Aqui o mes comeca do "0" ou seja o janeiro é 0 e dezembro é 11
   3º - Dia 
   4º - Hora
   5º - Minutos
   6º - Segundos
   7º - Fuso-horario que se voce não declarar ele vai usar o do hardware do usuario
Os parametros "minimos" que este objeto consegue aceitar é o ano e mes .
*/

//Ou voce pode declarar os parametros tambem usando o "date String" que basicamente dentro dos parenteses voce cria uma string e coloca os 7 parametros que eu citei acima mais tudo separado por um traço . Aqui o mes comeca no 1 normal.
//Depois de voce colocar as datas ano mes e dia voce da um espaço e coloca as horas separados por dois pontos : 
//let d = new Date('2020-01-01 15:42:17')

let d = new Date();


//let novoValor = d;

//Tem uma função do date chamada toDateString() ele retorna basicamente uma data mais resumida
//console.log(d.toDateString())

//A função toUTCString() retorna a hora com o fuso horario da europa
//console.log(d.toUTCString())

/*
//Para pegar Informações especificas do seu date 
   getFullYear = Ano 
   E o mes(mes comeca do 0) =  getMonth .
   Dia da semana = getDay().
   Dia do mes = getDate()
   Hora = getHours()
   Minutes = getMinutes()
   Segundos = getSeconds()
   Milisegundos = getMiliseconds()

*/
//let novoValor = d.getFullYear() 
//let novoValor = d.getMonth()
//let novoValor = d.getDay()
//let novoValor = d.getDate()
//let novoValor = d.getHours()
//let novoValor = d.getMinutes()
//let novoValor = d.getSeconds()
//let novoValor = d.getMilliseconds()

//Manipulações de datas

//Para setar novos informações voce usa a função set em seguida o que voce quer alterar ...
d.setFullYear(2027) // Setar o ano
d.setMonth(5) // Setar o mes
d.setDate(26) // Setar o dia do mes

//Para voce digamos querer colocar algum dia a mais , fazer uma soma de dias , por exemplo quero pegar a data do dia atual e quero acrescentar mais 5 dias. Voce usa o setdate para setar um dia e dentro nos parametros voce coloca o getdate()que seria para ele pegar o dia   + dias que quer a mais
d.setDate( d.getDate() + 5)
//Bom usar esse negocio de acrescentar dias a partir da data atual ,para quando voce estiver criando um sistema em que quando o usuario insere alguma informação , eu vo dizer para ele qual é o prazo final e o prazo final seria por exemplo 5 dias voce pode setar a data desse jeito.







let novoValor = d
console.log(novoValor)
