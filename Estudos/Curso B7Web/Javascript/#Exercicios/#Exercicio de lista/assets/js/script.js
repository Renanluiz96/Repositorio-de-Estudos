//Digitar algo no campo de input e quando voce apertar a tecla enter , ele vai enviar o conteudo desse input para a lista ul , sem mecher no html.

//Selecionando os Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul')

//Funções
function handleKeyUp(e) { // Usa o e como parametro para fazer a verificação de qual tecla voce digito. ou seja o e é a tecla que voce esta digitando
   if(e.key === 'Enter') { //Ele vai fazer uma verificação se a tecla e for pressionada.
      //Adicionar elemento LI na lista
      const newLi = document.createElement('li'); //Ele vai criar um novo li(Vazio)
      newLi.innerHTML = input.value; // Vai inserir neste li o que voce digito la no input
      lista.appendChild(newLi); // E vai adicionar este novo li criado e com o conteudo do input la na lista(ul)

      //Limpar o campo de texto depois de ter adicionado o valor do input na lista
      input.value = '';
   }
}

//Eventos
input.addEventListener('keyup' , handleKeyUp); // Criando um evento de click no teclado para quando voce soltar a tecla"keyup" , ele vai disparar a função handleKeyUp