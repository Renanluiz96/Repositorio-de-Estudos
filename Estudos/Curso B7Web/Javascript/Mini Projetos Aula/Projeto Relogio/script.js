let digitalElement = document.querySelector('.digital') //Selecionar a div que vai ser inseriada a hora
//Selecionando os ponteiros de segundos, minutos e horas para manipulando o horario e jogando nestas divs
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')


//Função para atualizar o horario do relogio na tela
function updateClock() {
    //Pegando o date que é a classe de manipulações de data , para acessar os componentes da classe atraves da variavel
    let now = new Date()

    //Pegando o horario atual , horas , minutos e segundos e salvando nas variaveis
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //Inserindo a hora dentro do relogio digital que voce seleciono com a variavel digitalElement , e voce vai inserir no html o horario. Com a função fixZero para inserir o 0 caso for menor que o 10
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //Colocando hora no relogio analogico

    //Criando as variaveis onde vai fica localizado os ponteiros

    //Os segundos voce tem que dividir entre a quantidade de graus(360) por quantos segundos tem um segundo(60) e depois multiplicar pela variavel segundos que vai conter o horario atual = Porque ai ele vai pega no css o angulo certo para posicionar o ponteiro. E depois de tudo isso diminuir 90 que seria os 90 graus para compensar , para que ele comece no local certo ou seja o 0 , se não ele vai comecar no 15 .
    let sDeg = ((360 / 60) * second) - 90;
    //Faz a mesmca coisa com o minuto pois existe 60 minutos em 1 hora . Ai a logica é a mesma para os minutos e horas, o que muda na hora  é por quanto que é dividido o grau , que seria por 12 pois um relogio digital tem 12 horas , e não 24.
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    //Mostrando na tela os ponteiros acrescentando um transform no style css , e o valor do rotate é a variavel que voce crio antes que faz as contas dos graus onde o ponteiro esta localizado  , e vai se alterando dinamicamente.
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

//Função onde ele faz uma verificação se os segundos/minutos/horas são menores que 0 , ele vai acrescentar um 0 antes , para não ficar somente 1 digito na tela 
function fixZero(time) {
    return time < 10 ? `0${time}` : time ;
}


//Cria um intervalo onde vai rodar uma função de 1 em 1 segundo onde vai ser atualizado o horario 
setInterval(updateClock, 1000);
updateClock()