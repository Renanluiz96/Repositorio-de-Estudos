//Para voce pegar via javascript a quantidade total dos itens dinamicamente ,então se alterar ele vai alterando a quantidade pegando o length a quantidade total
let totalSlides = document.querySelectorAll('.slider--item').length

//Para mostrar em qual slide ele esta , e depois ir alterando de slide conforme esta variavel . Dando um margin atraves de uma função
let currentSlide = 0
let sliderWidth = document.querySelector('.slider').clientWidth;

//E depois de pegar a quantidade de div e salvar ela em uma variavel , voce vai fazer dinamicamente com que a div com a largura total de imagem. tenha 100vw * a quantidade de imagens. usando a variavel que voce salvo anteriormente.
document.querySelector('.slider--width').style.width =
    `${sliderWidth * totalSlides}px` //100vw * quantidade de imagens dinamicamente que pode ser alterada pela quantidade de imagem


//Aqui voce vai colocar a altura dos botões na altura da div slider , e o clientHeight é para pegar a altura da tela do usuarios e voce coloca um px no final para colocar dinamicamente em pixel a altura certinha de acordo com a div slider na tela do cliente
document.querySelector('.slider--controls').style.width =
     `${sliderWidth}px`
document.querySelector('.slider--controls').style.height =
     `${document.querySelector('.slider').clientHeight}px`


//Fazer funções onde elas fazem verificações de onde esta o seu slide para que possa passar para o proximo ou voltar ao slide anterior
function goPrev() {
    //Ao clicar em prev ele vai diminuir o slide
    currentSlide--;

    //Se ele esta no primeiro(0) e voce clicar em voltar, ele tem que ir para o ultimo
    if(currentSlide < 0) {//Cliquei ele foi para -1 , mais não existe -1 então ele iria para o ultimo slide.
        currentSlide  = totalSlides - 1 // E esse ultimo slide se torna o totalSlides -1;
    }
    updateMargin()
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)){ // Se o ultimo slide for o 2 que é o total - 1 , então quer dizer que estou no ultimo e eu cliquei em next e ele passou para um a  mais do que o ultimo , então ele volta pro 0 e comeca la do começo
        currentSlide = 0;
    }
    updateMargin()
}

//O update margin é o que realmente faz o processo acontecer
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth
    //Ele vai pegar a variavel currentSlide , e baseado nesta variavel ele vai setar um margin-left especifico para cada posição "Sempre negativo o margin".
    //Nova margem vai ser o currentSlide * a largura da tela do navegador do usuario
    let newMargin = (currentSlide * sliderItemWidth);
    
    //Esse valor que voce pego dessa variavel voce vai setar la no slider width alterando o a propriedade marginleft dele usando um negativo e passando variavel como um valor negativo e usando um px ao lado da variavel para entender que é em pixel a novo valor da margin
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;

}
    
