//Como pegar a propria imagem que voce selecionou antes exclusive de voce fazer o upload . Quando eu selecionar a imagem e via javascript pegar esta imagem e ja mostrar na tela , bem usada para digamos voce quer ver qual a imagem que voce esta fazendo o download

function mostrar() {
   //Pegar a imagem que foi selecionado
   let imagem  = document.getElementById('imagem').files[0]; // Vai pegar o files 0 que seria o primeiro arquivo/imagem e salva esta imagem em uma variavel para manipular ela

   //Criar uma tag img para acrescentar a imagem
   let img = document.createElement('img');

   //Criar o src(que é onde fica a propria imagem) da tag img que voce acabo de criar , para jogar dentro dela a imagem que voce seleciono la em cima
   img.src = URL.createObjectURL(imagem); // Ai depois voce usa o URL.createObject e passa como parametro o file da imagem que voce pego para ser mostrada na tela atraves de URL . Se voce passar como parametro um file dentro desta createobjectURL , ele consegue gerar uma url "mostravel da imagem"
   img.width = 200; //Se caso a imagem for muito grande voce pode alterar o tamanho dela

   //Agora depois de criada a tag img e preenchida o src com a propria imagem voce joga ela naquela div com o id area para ela aparecer na tela  com o appendChild porque é um objeto que vai se transformar em um elemento
   document.getElementById('area').appendChild(img);   
}