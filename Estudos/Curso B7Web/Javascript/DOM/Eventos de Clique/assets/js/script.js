/*Eventos de Clique = Eventos de clique são ações que vão acontecer na sua tela ao voce clicar em alguma coisa
Evento de clique , é uma forma do javascript entender que houve um click em algum lugar , e agora cabe a voce especificar em que lugar é este.
Logica é esta voce configura um evento então quando acontecer aquele evento alguma coisa vai ser acionada .

Existem 2 formas de voce fazer alguma coisa quando um evento de clique acontece .
   1º = primeira forma é voce ir onde voce vai  clicar ou seja na tag , id , class ... la no HTML e adicionar um atributo chamado "onclick" e ao lado entre aspas duplas voce coloca o nome de uma "Função" e tambem javascript se quiser executar na hora que o local for clicado .
      <button class="botao" onclick="clicou()" >Clique em mim</button>
      Para usar este função voce tem que criar ela no javascript

   2º = Voce pode fazer a mesma coisa que na primeira forma só que via javascript , o resultado é o mesmo. Voce vai definir este evento via javascript .
      1º = Para fazer um evento de clique via javascript em um elemento , voce tem que selecionar o elemento
      2º = Se recomenda depois de voce selecionar o lugar que voce quer fazer seja ele tag, class, id ... voce salvar ele em uma variavel.
         let botao = document.querySelector(".botao")
      3º = Depois na variavel que voce salvou , voce pode executar uma função chamada de addEventListener() , e nesta função voce tem 2 parametros que voce vai colocar nesta função 
         Primeiro é o tipo de evento = Evento de "click"
         Segundo é a função que vai executar. Voce pode colocar a função sem os parenteses pois só vai utilizar a função ao ser clicado. Voce pode criar uma função ou uma arrow function
         botao.addEventListener("click", () => {
                  clicou()
               });


      addEventListeneer = é uma função que usa junto a alguma variavel que tem algum elemento dom salva. E fica observando se vai ter algum evento de clique , e na hora que ele executa o evento seja ele um click no local que ele esta que no caso aqui uma variavel que esta salvo o elemento dom da classe botão. ele vai ser acionado a função que esta no segundo parametro dele.

      botao.addEventListener("click", () => {
            clicou()
         });
*/

function clicou() {
   console.log("Clicou no botão")
}

let botao = document.querySelector(".botao")

botao.addEventListener("click", () => {
   clicou()
});