//Initial Data

//Selecionando a cor na paleta de cores
let currentColor = "black"; // que inicialmente comeca com black depois vai sendo manipulada

//Selecionando a tela canvas
let screen = document.querySelector('#tela');

//Pegando um contexto 2d dentro do canvas que vamos desenhar dentro dele
let ctx = screen.getContext('2d');

//Variavel que vai ser um boolean para ver se pode ou não desenhar. Que comeca como false
let canDraw = false;

//Posição inicial do mouse na tela 
let mouseX = 0;
let mouseY = 0;

//Events

//Selecionando todos as paletas de cores pela class dela e usando o forEach para acessar de uma em uma , e adicionando um evento de click em cada um deles.
document.querySelectorAll('.colorArea .color').forEach((item) => {
    item.addEventListener('click', colorClickEvent);
});

//ADICIONANDO OS EVENTOS NA TELA PARA DESENHAR

//Evento de quando clicar e segurar o click "mousedown"
screen.addEventListener('mousedown', mouseDownEvent);

//Evento de movimentação do mouse na tela "mousemove"
screen.addEventListener('mousemove', mouseMoveEvent);

//Evento de soltar a tecla do mouse depois de clicada/segurada.
screen.addEventListener('mouseup', mouseUpEvent);

//Adicionando evento de click no botão limpar
document.querySelector('.clear').addEventListener('click', clearScreen)

//Functions

//Função do click na paleta de cores
function colorClickEvent(e) {
    // Pegando a cor da paleta pelo atributo data-color que contem em cada div.
    let color = e.target.getAttribute('data-color');

    //Ao clicar na cor e pegar ela , voce vai armazenar ela , na variavel currentColor a cada click na cor vai alterando, que inicialmente comeca como preta. 
    currentColor = color

    //Tirando a class active , de quem ja tinha a ela , e colocando na cor em quem voce seleciono
    document.querySelector('.color.active').classList.remove('active')
    //depois de ter tirado em quem estava , agora voce vai coloca-la na nova div que tiver com a cor selecionada
    e.target.classList.add('active')
}

//Função para click do mouse
function mouseDownEvent(e) {
   //Quando clica no mouse para desenha , a variavel canDraw , vai pra true , assim podendo desenhar
   canDraw = true;

   //Depois de ter clicado em algum lugar da tela ,voce vai salvar onde voce ta clicando na variavel mouseX e mouseY que comeco como 0 , ao click ele vai pegar esta propriedade de onde ele esta e atualizar a variavel.
   //Variavel , para pegar a posição do mouse na tela , na posição X e Y . Usando a propriedade offsetleft e offsettop , para diminuir os lados que não for a tela ou seja , para pegar a posição exata de dentro do canvas, pois por padrão ele vai pegar a posição da tela toda da tela , e voce usa o offset para diminuir isto .
   mouseX = e.pageX - screen.offsetLeft;
   mouseY = e.pageY - screen.offsetTop;
}
//Função para movimentação do mouse na tela , para pegar a localização dele
function mouseMoveEvent(e) {
   //Verifica , se o canDraw esta true ou não , e só se ele estiver true ai sim voce pode desenhar
   if(canDraw) {
    
    //Depois que ele poder desenhar ele roda a função de desenhar
    draw(e.pageX, e.pageY)
   }
   
}
//Função para quando solta o click do mouse
function mouseUpEvent() {
    //Quando soltar o mouse, canDraw vai pra false
    canDraw = false;
}

//Função para desenhar na tela pegando a posição do mouse como o parametro
function draw(x, y) {

    //Vai pegar a posição do mouse na tela , pegando a posição do parametro da função menos o offset da tela , que agora pego a posição que tem que desenhar.
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;


    //Agora voce vai desenhar na variavel ctx - que é o contexto . Usando a função beginPath()
    ctx.beginPath(); //Começo do desenho
    ctx.lineWidth = 5; //Grossura da linha
    ctx.lineJoin = 'round'; //Formato da linha - redonda(round)
    ctx.moveTo(mouseX, mouseY); //Mova para a posição inicial
    ctx.lineTo(pointX, pointY); //Faça uma linha até o pointX e o pointY
    ctx.closePath(); //Fechamento do processo de desenho
    ctx.strokeStyle = currentColor // Para pegar a cor da linha ,que é a cor que esta salva la no currentColor que pega a paleta de cores.
    ctx.stroke(); //Finalizar todo o processo 



    //Para salvar o local que voce paro de desenhar , e depois querer continuar . a variavel mouseX e Y , vai ter que pegar o valor do seu ponto que voce crio aqui
    mouseX = pointX
    mouseY = pointY


}

//Função para limpar a tela
function clearScreen() {
    //Vai zerar o processo de desenho
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    //Limpa o retangulo da tela
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}