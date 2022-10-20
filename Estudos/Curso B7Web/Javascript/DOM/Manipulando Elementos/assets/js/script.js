function clicou() {
   const teste = document.querySelector('#teste')
   const ul = teste.querySelector('ul');

   /*
      //Adicionando conteudo HTML em um elemento DOM 
      //ul.innerHTML = ul.innerHTML +  "<li>Item Alterado</li>"; //innerHTML Serve para voce alterar o conteudo interno do elemento . podendo ver o conteudo , e tambem alterar 

      //ul.children[0].innerHTML = "Um Elemento alterado!" // Aqui voce altero o elemento filho deste ul no caso um li

      //console.log(ul.outerHTML) // É igual o inner html só que ele inclui o que tem fora no caso o proprio ul mesmo tambem sera mostrado.

      //Para voce manter o conteudo original do elemento e inserir mais algum conteudo com o innerHTML sem alterar o original .

      //ul.children[0].append("<li>Item Alterado</li>"); // Aqui faz a mesma coisa que o innerHTML acima , mais este item apenas acrescenta , o innerHTML não ele apaga tudo reinscreve denovo e coloca o conteudo a mais . O append somente funciona para texto e não para o conteudo html como o innerHTML
   */

   /*
      //Para adicionar um novo elemento e ser adicionado igual o append , sem mecher na estrutura do html. Voce usa a função appendChild = esse sim insere um elemento html ao inves de texto. Mais para isto voce vai ter que criar ele , e depois inserir ele onde voce quer.

      //let newLi = document.createElement("li"); //Aqui estou criando uma variavel para armazenar o elemento e usando o createElement para criar um elemento li.

      //newLi.innerText = "Item Adicionado"; //Só que o item acima que voce crio ele estava vazio sem conteudo , ai voce adiciona um conteudo , aqui eu só adicionei um texto no elemento li

      //ul.appendChild(newLi); //Agora aqui eu inseri o li atraves da variavel que eu criei o li e salvei antes acrescentei o conteudo , eu adicionei este elemento criado na ul .

      //Tanto o append quanto o append child ele vai adicionar o conteudo ou o elemento novo no final do conteudo como ultimo item , agora para adicionar os conteudo no comeco da lista , voce usa o "prepend" o prepend pode ser tanto para texto quanto para elementos html

      //ul.prepend(newLi);
   */

   //Para Adicionar ao redor dele conteudo , não dentro do elemento mais sim antes ou depois dele, mais pelo lado de fora , como um margim do css
   //AFTER = Depois
   //BEFORE = Antes


   //Criando Conteudo na memoria
   let newUl = document.createElement('ul') //Criei um novo ul

   for (let i = 0 ; i < 5; i++) { // Quero criar 5 li e acrescentar na ul que eu criei ali em cima 
      let newLi = document.createElement('li') // Aqui ele vai criar o li
      newLi.innerHTML = 'Item add' + (i + 1); //Aqui preenchi o conteudo do meu li ele vai add o conteudo de texto e ao lado ele vai colocar a numeração no cas o o i = é do laço de repetição eu coloquei com + 1 porque senão ele comecaria no 0 agora ele vai mostrar do 1 ao 5.
      newUl.append(newLi); // E no final do laço ele vai colocar o li que ele crio e preencheu aqui no laço , vai colocar no elemento ul que eu criei la em cima.

   }
   //E depois de ter criado todos os lis e adicionado eles no novo ul . agora eu posso usar o after ou o before para acrescentar este ul novo la na outra lista que eu ja tinha , e vai ficar a lista antiga , e esta nova que criei juntas. 
   ul.after(newUl) // Ele crio o novo ul depois deste elemento. 

}