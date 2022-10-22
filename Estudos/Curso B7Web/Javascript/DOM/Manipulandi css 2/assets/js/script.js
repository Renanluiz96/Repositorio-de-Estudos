function clicou() {
   const li = document.querySelector('li') 
   /*
   //para usar a propriedade style para alterar o css , quando voce for alterar algum item css que contem um traço entre duas palavras por exemplo "background-color". Voce não coloca o traco , voce coloca a primeira letra do segundo nome em maiuscula  = "backgroundColor" . Esta tecnica chama de kemelCase , onde a segunda palavra sempre a primeira letra fica maiuscula.
   //li.style.paddingTop = '200px'
   //li.style.fontSize = '30px'
   */
   
  const button = document.querySelector('button')
  
  /*
  //Quando voce quer acessar a lista de classes de algum elemento voce usa a propriedade classList. para voce acessar a lista de propriedades que esta lista tem voce aperta o ponto e depois vai aparecer a quantidade de propriedade que voce pode fazer com as classes  =
      add = adicionar classe ao elemento

      remove = remover classe do elemento

      contains = para verificar se voce tem uma classe . Isso é bem usado para ficar alternando entre uma classe e outra , usando com if para verificação.

      toggle = Que vai verificando se tem uma class especifica se não tiver ele vai add , se tiver ele vai remover .

      replace = Onde ele vai fazer a troca de uma classe para outra voce passa duas classes como parametro, e ao ser acionada ele remove a primeira classe e coloca a segunda classe , basicamente resumindo um remove de uma e add de outra  em uma propriedade só . Voce usa com um if contains para verificar se tem a class , ai voce alterna entre elas , e no else , voce coloca o inverso de cima a segunda propriedade vira a primeira e a primeira vira a segunda
   */

   //Um exemplo de alternação entre uma class e outra usando o if , ele vai verificar se tem uma class azul se tiver ,ele remove ela , e add outra class verde . Se caso não tiver e for a class verde que voce esta alternando , ele vai remover verde , e vai add a class azul , e assim alternando .
   /*
   if(button.classList.contains('azul')) { // Isso se chama um toggle que ele vai fica verificando e trocando
      button.classList.remove('azul')
      button.classList.add('verde')
   } else {
      button.classList.remove('verde')
      button.classList.add('azul')
   }*/

   //Toggle que vai fazendo a verificação e vai add a class se não tiver ela , e se tiver a class ele vai remover.
   //button.classList.toggle('azul')

   // Replace =  Voce usa com um if contains para verificar se tem a class , ai voce alterna entre elas , e no else , voce coloca o inverso de cima a segunda propriedade vira a primeira e a primeira vira a segunda
   if(button.classList.contains('azul')) {
      button.classList.replace('azul', 'verde')
   } else {
      button.classList.replace('verde', 'azul')
   }




   
   

}