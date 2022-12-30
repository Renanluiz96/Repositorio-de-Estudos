/*
Para ele criar um observador de evento no corpo do site todo(body) quando for acionado alguma tecla com o keyup ele vai executar uma função a cada tecla ao soltala(keyup). E esta função recebe os dados do proprio evento ou seja sempre que uma tecla for apertada na pagina inteira.
*/
document.body.addEventListener('keyup',(event)=> {
    //Vai executar a função de tocar o som , pegando a tecla pressionada. Usando o lowerCase para transformar a informação da tecla pressionada em letras minusculas, para usar junto com as variaveis , e outros metodos , que tambem comtem nomes minusculos 
    playSound(event.code.toLowerCase())
})
//Colocando um efeito de clique no botão tocar
document.querySelector('.composer button').addEventListener('click', ()=> {
    //Selecionando o input atraves do id , depois pegando o valor digitado dentro deste input com o value
    let song = document.querySelector('#input').value;
    //Verificação para se o song tem alguma coisa nele , se ele tiver alguma coisa diferente de vazio .
    if(song !== '') {
        //Cria um array com cada letra digitada , é um item do array, ou seja voce vai da um em split em nada para ele pegar cada letra e jogar em um array separadamente
        let songArray = song.split('');
        playcomposition(songArray)
    }
})
//Função para tocar o som.
function playSound(sound) {
    //Pegando o audio de acordo com a tecla que voce digito
    let audioElement = document.querySelector(`#s_${sound}`);

    //Pegando a propriedade data-key de uma tag  em especifico dinamicamente de acordo com o que voce digito. Para pegar uma propriedade de uma tag , voce tem que digitar a tag colocar um colchete e o nome da propriedade que voce quer pegar , depois ="atributo" para pegar o atributo desta propriedade, se voce quiser pegar dinamicamente voce usa template string  
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)



    //Faz uma verificação se audioElement for encontrado(True)
    if(audioElement) {
        //Para voltar o ponteiro do audio para 0 toda vez que for acionada o audio , para quando for clicado varias teclas o audio resetar rapidamente
        audioElement.currentTime = 0;

        //Se achar ele executa uma função play que é pra tocar o audio , que ja vem junto com a tag audio 
        audioElement.play()
    }

    //Faz uma verificação tambem no keyElement para ver se acho a tecla tambem
    if(keyElement) {
        //Depois de ter achado a tecla e se for true , adiciona uma classe do css para mostra na tela qual botão voce clicou
        keyElement.classList.add('active')

        //Vai criar um tempo para depois retirar a classe active, e voltando ao normal
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300);
    }

}
//Função onde pega as informações la do campo de texto e transforma em um conjunto de sons e os executa
function playcomposition(songArray) {
    let wait = 0; //Cria um tempo de espera que comeca com 0 e depois ele vai incrementando um tempo.

    //Voce faz um loop em cada item do array e a cada item que ele passar ele vai executa a função playsound() em cada item do array até chegar ao fim.
    for (let songItem of songArray ) {
        //Como o javascript executa muito rapido , então voce tem que setar um settimeout e setar um tempo de a cada som um tempo para que ele não execute todos de uma vez
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait);
        //Depois de ter executado o primeiro som que comeco com 0 , voce vai acrescentando um tempo de 250 , a cada vez que for executado , dando assim uma cadencia , em cada letra executada ele vai aumentando o tempo.
        wait += 250;
    }
}