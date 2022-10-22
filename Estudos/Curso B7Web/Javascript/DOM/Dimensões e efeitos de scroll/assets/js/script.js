//Dimensões de um elemento
const texto = document.querySelector('.texto')


//Para o javascript pegar as dimensões de um elemento , largura , altura , largura e altura com a borda e sem a borda , largura do conteud do item dentro do elemento .

/*Pegar as dimensões voce tem 3 grupos separados de informações que voce pode pegar a respeito das dimensões de altura e largura  do seu elemento  =

   offset = Width / Height  : Ele é a largura do elemento + o scrollbar + padding + a borda do item . todo ele somando ele vai mosta a largura e a altura total somando estes itens.

   client Width / Height : Ele é o tamanho total do elemento, - a barra de rolagem, + o padding

   scroll Width / Height : Ele é o tamanho total do conteudo , se caso tiver uma barra de rolagem e for muito grande ele na altura vai ser o tamanho total até o final da barra de rolagem.
*/

/* // Se voce quiser procurar o scroll . e quer saber o scroll do conteudo inteiro, voce usa o window para a tela toda , se for de um elemento especifico voce usa o document.
    
   //Voce usa o comando scrollTop = para saber onde esta a parte de cima do scroll . 
   //scrollLeft = para saber a posição do scroll na posição horizontal.

Quando for a tela inteira voce usa o comando scrollY para a parte vertical da tela , e scrollX para a parte horizontal da tela 
   window.scrollX 
   window.scrollY
*/

//Se quiser fazer com o seu scroll vai para algum lugar em especifico voce usa a função scrollTo() e com o scrollTo voce tem duas formas de usar ele .
   // 1 º é voce passando dois parametros nele ,o primeiro na direção x, o segundo na direção Y = scrollTo(0 , 0) fazendo assim basicamente voce vai esta jogando o seu scroll la na ponta de cima .

   // 2 º Para fazer uma com que ele vai em direção mais de uma forma suave , voce dentro da função scrollTo() dentro dela voce cria um objeto com chaves e dentro do objeto voce coloca a direção do top , e se tiver um left ou right voce coloca tambem. e em baixo voce coloca uma propriedade chamada behavior(que significa comportament) e nesta propriedade voce coloca smooth(suave) entre aspas  

function subirtela() { // Fazer uma função ao ser acionada ele vai deixar a barra de rolagem da tela la no comeco la em cima.
   window.scrollTo({ // Para fazer um scroll de tela suave usando objeto e dentro dele o behavior smooth
      top: 0,
      left: 0,
      behavior: 'smooth'
   }) 
}

function decidirBotaoScroll() {
   if(window.scrollY === 0) { // Se o scroll estiver la no inicio da tela la em cima. Voce vai ocultar o botão com o display none
      document.querySelector('.scrollbutton').style.display = 'none'; // Vai acessar a class do elemento e nele colocar o display none

   } else { // Caso o contrario ele não estiver la no comeco la em cima , vamos mostra o botão na tela
      document.querySelector('.scrollbutton').style.display = 'block'; // Caso o conteudo não estiver no topo da pagina em cima o elemento vai ter o display block ou seja ele vai aparecer
   }
}

setInterval(decidirBotaoScroll , 1000) // Set interval é uma função que ele vai fazer alguma coisa de tempo em tempo , então que eu coloquei que ele vai executar aquela função de verificação do scroll na tela que eu fiz ali em cima , e o segundo parametro é o tempo eu coloquei 1000 milisegundos que equivale a 1 segundo. Então basicamente a cada 1 segundo ele vai executar a função decidirBotaoScroll .

window.addEventListener('scroll', decidirBotaoScroll) // Este conceito pode ser uma substituição do conceito acima,  pois o de cima ele vai ficar processando a cada 1 segundo sem parar. Aqui com o addEventListener ele vai ficar monitorando a tela pois esta rodando a função no window, então ele vai monitorar o scroll da tela como ta la no primeiro parametro , então caso tenha alguma modificação no scroll da tela , ele vai rodar a função que eu criei acima , que eu coloquei ela como segundo parametro