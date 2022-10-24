//Metodos de manipulações de numeros .

let n = '10.156451';


//Para transformar um numero em uma string voce usa a função .toString() , esta função tostring ela existem em qualquer outra variavel , array  , objeto ... mais ela é muito mais util para transformar numeros em strings.
//console.log(n.toString())


//Para caso voce tenha um numero muito grande depois do ponto por exemplo 10.156451 ... e voce queira colocar só com 2 casas decimais depois do ponto voce usa a função .toFixed() e passa como parametro a quantidade de casas decimais voce quer depois do ponto. quer 2 casas decimais  n.toFixed(2) = 10.15 , bem usado para quando fala em dinheiro.
//console.log(`R$ ${n.toFixed(2)}`)


//Para fazer o oposto do toString e se tiver uma string que contenha numeros , e quer trocar esta sting por numeros voce usa a função .parseInt() e dentro dos parametros voce coloca a variavel que contem a string com numero "INTEIRO" , normalmente voce salva em uma variavel nova .
//E se caso a sting tenha algum valor decimal voce usa para trocar a string para um valor que contenha "DECIMAL" voce usa o parseFloat() e a variavel string que voce quer trocar
valorInteiro = parseInt(n)
valorDecimal = parseFloat(n)
console.log(valorInteiro)
console.log(valorDecimal)