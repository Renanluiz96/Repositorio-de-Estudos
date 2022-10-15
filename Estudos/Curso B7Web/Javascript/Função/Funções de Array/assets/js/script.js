// Funções de arrays : algumas funções que voce usa em arrays .
//Lembre se de colocar a função em array voce coloca o nome do array  , um ponto  e depois o nome da função com os parenteses e os parametros de o que voce quer fazer nesta função

let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']


//Para mostrar a quantidade total de itens dentro de um array voce usa a função length ;
//    console.log(fruits.length); 5


// Para acrescentar mais um item ao seu array em ultimo lugar voce usa o comando push
//    fruits.push('Goiaba')

//Para tirar itens do array voce tem o pop que tira o ultimo item , e o shift que tira o primeiro item
//    fruits.pop()
//    fruits.shift()


// Para voce transformar , o seu array em uma string , voce usa o join , e voce passa no parametro o que voce quer colocar entre cada item para que na hora  dele ser uma string ele possa ser separado por espaço ou virgula o que voce quer
//    fruits.join(' ') Para colocar um espaço entre uma palavra ou outra
//    fruits.join(',') Para colocar uma virgula entre uma palavra e outra


//Para voce trocar o valor de um item voce coloca a posição dele entre colchetes um = e depois o novo valor do item que voce quer alterar ; Por exemplo primeiro item seria o 0 . OBS : Ele vai "alterar" e não acrescentar
//    fruits[0] = 'Pera'
//    fruits[fruits.length - 1] = 'Pera'   -> Aqui uma dica para voce alterar o valor do ultimo item , voce pega o valor total do array com o length e diminui -1 que como ele comeca no 0 o valor do ultimo é sempre um valor a menos do total do length , ai voce altera o valor , Muito usado para quando voce tem um array muito grande.
//Ou para alterar o ultimo item voce pode usar o comando pop para tirar o ultimo item , e depois o push para acrescentar um item novo em ultimo lugar