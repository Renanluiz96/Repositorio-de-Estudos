//Para voce pegar via javascript a quantidade total dos itens dinamicamente ,então se alterar ele vai alterando a quantidade pegando o length a quantidade total
let totalSlides = document.querySelectorAll(".slider--item").length

//E depois de pegar a quantidade de div e salvar ela em uma variavel , voce vai fazer dinamicamente com que a div com a largura total de imagem. tenha 100vw * a quantidade de imagens. usando a variavel que voce salvo anteriormente.
document.querySelector('.slider--width').style.width =
    `calc(100vw * ${totalSlides})` //100vw * quantidade de imagens dinamicamente que pode ser alterada pela quantidade de imagem


//Aqui voce vai colocar a altura dos botões na altura da div slider , e o clientHeight é para pegar a altura da tela do usuarios e voce coloca um px no final para colocar dinamicamente em pixel a altura certinha de acordo com a div slider na tela do cliente
document.querySelector('.slider--controls').style.height =
     `${document.querySelector('.slider').clientHeight}px`