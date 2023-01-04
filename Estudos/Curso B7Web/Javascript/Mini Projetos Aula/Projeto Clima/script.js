//Fazer um evento de ficar olhando o submit do formulario . Ao ser clicado no input do submit do formulario
document.querySelector('.busca').addEventListener('submit',async (event)=> {
    // Previnir o comportamento padrão que o formulario deveria ter
    event.preventDefault();

    //Pegando o valor do input digitado pelo usuario para manipulação
    let input = document.querySelector('#searchInput').value;

    //Fazer uma verificação se o campo de input tiver vazio , para não mandar um campo vazio
    if(input !== '') { //Tem algo digitado
        clearInfo();
        showWarnings('Carregando...')
        
        //Pegando o url da API do site de clima , usando a função encodeURI() para transformar tudo que eu digitar no input que vou mandar para esta requisição , só que o que eu digitar o navegador não le entao usa esta função encode para transformar em codigo para o url do site. E colocar tambem o seu numero de api que voce tem na sua conta no site. 
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=c840bab6eb0452919e1ff3e124a1fa6c&units=metric&lang=pt_br`

        //Depois de voce pegar esta url da API , faz uma requisição pra ela via fetch do javascript. e salva em uma variavel o resultado desa requisição
        let results  = await fetch(url);

        //O resultado que voce recebeu da url agora voce o transformar em json . para voce conseguir ler o resultado
        let json = await results.json()

        if(json.cod === 200) { //Se o codigo que voce recebeu do json então quer dizer que voce encontrou uma cidade , caso não for é que a cidade não foi dsa

            //Voce vai montar o objeto usando uma função que mostra na tela as informações que voce quer
            showInfo({
                name: json.name, //Nome da  cidade
                country: json.sys.country, //Pais
                temp: json.main.temp, //Temperaturadasd
                tempIcon: json.weather[0].icon,//Icone da temperatura
                windSpeed: json.wind.speed, //Velocidade do vento
                windAngle: json.wind.deg //Angulo do vento
            })
        } else { //Se não encontrar , voce coloca um aviso na tela e limpar as informações na tela se tiver algo
            clearInfo()
            showWarnings('Não encontramos esta localização.')
        }
    } else{
        clearInfo();
    }

})




//Função para mostrar os avisos na tela , conforme o comportamento da pesquisa do usuario
function showWarnings(msg) {
    //Seleciona a div que vai conter o aviso , insere no html dela a mensagem que voce quer colocar como aviso  no parametro quando voce for usar esta função
    document.querySelector('.aviso').innerHTML = msg
}

//Função para mostrar as informações na tela
function showInfo(json) {
    showWarnings(''); //Para tirar o aviso da tela

    

    //Preenchendo as informações que voce pego agora colocando elas na tela dinamicamente.
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`//Cidade e pais
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`//Temperatura
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`//Velocidade do vento

    //Troca a imagem do icone setando um atributo no img , voce troca o src , por a imagem e na imagem voce coloca uma template string, e dentro dela voce coloca o o icone la do json
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)` 

    //Para mostrar a tela de resultado na tela que estava com display none, agora voce coloca como block para aparecer
    document.querySelector('.resultado').style.display = 'block';
}

//Função para limpar as informações na tela
function clearInfo() {
    //Ela vai limpa a tela de aviso , e vai ocultar a tela de resultados , passando para display none
    showWarnings('');
    document.querySelector('.resultado').style.display = 'none'
}