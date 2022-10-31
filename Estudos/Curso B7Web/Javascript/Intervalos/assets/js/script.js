//Intervalos / Timers

//setInterval() = Uma função que dentro dela voce passa dois parametros . O primeiro é a função que voce deseja rodar (O nome da função aqui no parametro voce não precisa colocar os parenteses somente o nome da função mesmo). E o segundo parametro voce vai colocar qual é o intervalo entre uma execução e outra, que vai rodar a função que esta la no primeiro parametro , este intervalo do segundo parametro voce coloca ele em milissegundos.
   // Exemplo = 
   // let timer = setInterval(showTime, 1000)
//clearInterval() = é uma função que ela serve para parar/limpar o intervalo do setInterval. E dentro do parametro da função voce passar a variavel que esta executando a função setInterval por exemplo ali em cima a variavel timer que contem o interval rodando uma outra função de 1 em 1 segundo. 
//Usado para quando voce quer ficar atualizando algo o tempo todo na tela

/*
   function showTime() { // Criando uma função onde pega a date do computador
   let d  = new Date(); //Crio a variavel d e pego o date usando a classe new Date
   let h = d.getHours();// Pego a hora do computador usando um getHours na variavel "d" que contem a classe Date
   let m = d.getMinutes(); // Pego os minutos usando o getMinutes
   let s = d.getSeconds(); // Pego os segundos usando o getSeconds
   let txt = `${h}:${m}:${s}` // Crio uma variavel tipo string e dentro dela coloca as horas em formato de texto usando as variaveis horas minutos e segundos separador por : no formato padrão de horario.

   document.querySelector('.demo').innerHTML = txt // Depois eu pego a div que tem a classe .demo e "insiro" o conteudo da variavel txt que continha a sting com o horario usando o innerHTML. 

}

let timer; // cria a variavel timer sem conteudo 
function comecar() { 
   timer = setInterval(showTime, 1000) // Na hora que a função comecar rodar ele vai inserir um setInterval la na variavel timer que esta sem conteudo
}

function parar() { 
   clearInterval(timer) //Função parar vai executar uma função clearInterval e no parametro dela voce coloca a variavel , no caso aquela que comeco vazia e que quando foi acionada a função comecar ela seto um setinterval naquela variavel que foi de 1 em 1 segundo atualizando a hora. Agora nesta função aqui voce vai para aquele intervalo.
}


*/

//setTimeout = Ele vai setar um tempo especifico, ele vai esperar este tempo, depois ele roda a função e acaba , voce não precisa parar igual o setInterval . 2 parametros o primeiro a função que vai executar, voce pode criar fora ou dentro do timeout . Segundo quanto tempo ele vai "esperar" para executar aquela função.
//Usado para quando voce quer clicar em algo e esperar um tempo para depois aparecer alguma coisa na tela ...

let timer; // Cria a variavel sem conteudo
function rodar() {
   timer = setTimeout(function() { 
      document.querySelector('.demo').innerHTML = 'rodou'
   }, 2000) // vai inserir na função timer que esta zerada , um conteudo html la na div que tem a class .demo , ele vai inserir um conteudo depois que passar 2 segundos "e parou não vai executar mais a função" pois o settimeout somente executa 1 vez . voce determina um tempo para ele executar a função depois.
}
function parar() { 
   // voce pode usar o clearTimeout se caso voce quer parar a a execução do settimeout, antes dele executar a função.
   clearTimeout(timer)
}

//Configurar um codigo para ficar rodando de tempo em tempo de acordo com o que voce configurar. Milisendos até horas , esperar um certo tempo e depois rodar.

//Evento que ocorrer simutaneas vezes , Retarda = Ele retarda um tempo depois ele execulta

//Voce pode pegar a data do sistema usando a classe date. Ela pega o horario exato de quando a classe foi criada , e voce pode criar um timer para ele ficar pegando esta data denovo e ir atualizando o horario do date na tela com os segundos exatos.

