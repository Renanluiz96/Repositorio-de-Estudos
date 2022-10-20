function clicou() {
   const input = document.querySelector('input')
   /*
   //Pegando atributos(conteudos) de um item usando o getAttribute e entre parenteses e aspas voce diz que tipo de atributo voce quer pegar o que tem dentro do atributo , uma class voce ve o nome da class por exemplo
   console.log(input.getAttribute('class'))
   */

   /*
   //Para saber se tem algum atributo na tag voce usa a função hasAttribute e passa entre parenteses e aspas o nome do atributo que voce quer ver , voce coloca junto com um if por exemplo porque ele vai sempre retornar um resultado booleano pois ele vai te dizer se tem ou não tem o atributo .
   if(input.hasAttribute('placeholder')) {
      console.log('Tem placeholder SIM!')
   } else {
      console.log('Não tem placeholder')
   }
   */

   //Para inserir um atribute. ou  Modificar o conteudo que tem dentro de algum atributo , voce usa a função setAttribute. Nesta função voce passa dois parametros , primeiro quaç atributo voce quer inserir/trocar , e o segundo voce coloca conteudo que voce quer inserir/trocar
   //input.setAttribute('placeholder', 'Novo Placeholder') // Se não existir este atributo ele inseri, e se ja existir ele troca.

   const botao = document.querySelector('.botao')

   if (input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'password');
      botao.innerHTML = "Mostrar Senha";
   } else {
      input.setAttribute('type', 'text');
      botao.innerHTML = "Ocultar Senha";
   }


}