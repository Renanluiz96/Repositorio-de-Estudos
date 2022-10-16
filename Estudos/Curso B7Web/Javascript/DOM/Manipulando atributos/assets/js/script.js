//Manipular os atributos 

//Voce vai manipular os atributos de qualquer tag:
   // setAttribute = voce pode usar um comando de "inserir"  um valor em atibuto , para trocar tambem serve , voce só insere o novo valor naquele atributo . Neste comando voce tem que entre parenteses dizer qual atibuto voce quer trocar, e o segundo atributo que é o segundo parametro é o novo valor que voce quer colocar
   
   // getAttribute = e o outro comando voce pega o valor que esta naquele atributo especifico

function trocarImagem(filename , animalname) {
   document.querySelector('.imagem').setAttribute('src', 'assets/images/'+filename) // Aqui estou procurando a imagem que ta com a class imagem e usando o comando setattribute , e passando o valor src que é onde fica a imagem, e o segundo parametro estou colocando o endereço da imagem concatenando com o parametro ali da função , que no caso esta função vai ficar junto com o  botão então em um botão vai ter o parametro do cachorro e o outro botão vai ter o parametro do gato. e ai ao clicar no botão ele vai setando a imagem ao qual o botão for ou do gato ou do cachorro

   document.querySelector('.imagem').setAttribute('data-animal', animalname) //Aqui voce esta alterando o atributo data-animal, para o valor que voce passo como o segundo parametro la na função. ou seja agora ele ao setar a imagem do animal , ele vai trocar o atributo data-animal para o que estiver no botão no caso o botão para o gato vai alterar a imagem para a imagem do e o atributo data para gato tambem. Mesma coisa do cachorro.
}

function pegarAnimal() {
   let animal = document.querySelector('.imagem').getAttribute('data-animal')// Aqui voce vai salvar em uma variavel o atributo data-animal da imagem do animal que voce coloco la nos botões ou gato ou cachorro , ele vai pegar e salvar na variavel esta informação

   alert('O animal é: ' + animal) // Aqui voce basicamente vai criar um alert na tela para mostrando uma frase concatenando com a variavel animal que voce guardo como informação usando o atributo getAttribute e guardo o atributo data-animal que cada imagem continha 1 valor diferente

}