//Operador Rest = É quando voce vai mandar uma quantidade de parametros em uma função e não sabe quantas voce usa os mesmos 3 pontos do operador spread "..." no parametros da função para indicar que vai ser mandado uma quantidade de parametros , ai tanto pode ser 1 ou 10 qualquer que seja voce não vai precisar ficar colocando todos os parametros certinho , voce só coloca o ... + 1 parametro só que ele ja vai entender.
//Usando o rest ele vai entender que voce esta mandando um array com 1 ou varios parametros "Em forma de array"
/*function adicionar(...numeros ) {
   console.log(numeros)
}
adicionar(1,5 ,5 ,6)*/



//Usando uma função que utiliza o operador spread e o operdor rest.
function adicionar(nomes, ...novosNomes) {//Aqui voce cria uma função onde ele vai pegar um parametro , e o segundo parametro é um rest que pode ser enviado qualquer quantidade de parametros a seguir.

      let novoConjunto  = [// Ai aqui voce cria um novo array , que nele voce vai usar o spread 2 vezes
         ...nomes, // voce usa o spread para pegar o conteudo do primeiro parametro.
         ...novosNomes // E voce usa um novo  spread para pegar o conteudo ou os conteudos do operador rest que voce coloco como parametro la em cima. e neste operdaor rest pode ser enviado 1 ou mais parametros. 
      ]
      return novoConjunto // Depois voce vai retornar um array com todos os itens juntos seja o array que vai estar no primeiro parametro , e os outros parametros que voce vai mandar pelo rest no segundo parametro.
   }

   let nomes = ['Renan', 'luiz'] // Voce cria um array com algumas informações

   //Vo vai criar uma variavel , que nesta variavel voce vai usar a função adicionar e nela , no primeir parametro voce vai colocar o array que voce crio acima , e mais alguns outros itens que voce vai ir adicionando quantos forem pois la na função ela esta com o operador rest e pode receber quantos parametros forem
   let outros = adicionar(nomes, "Antonio", "maria", "josé")

   console.log(outros)