//Arquivo que vai conter a função para setar o valor do contador no contador da tela visualmente, fazer aparecer e alternando para minutos. E toda a logica por tras do contador. Faz a função aqui somente utiliza ela la. 

export const formatTimeElapsed = (seconds: number) => {

    //Transformar os segundos em minutos.
    let minutes = Math.floor(seconds / 60); //A hora que chegar nos 60 segundos , ele vai dividir e vai arredondar para baixo ficando 1 minuto, a hora que chegar nos 120segundos vai arrendondar para baixo mostrando 2 minutos... 
    seconds -= (minutes * 60) //E os segundos, é os minutos que estão sendo divididos, agora serão multiplicados por 60 novamente mostrando os segundos.

    //Transformando os numeros em strings, e fazendo uma verificação neles se caso o numero for menor que 10 , ele vai acrescentar uma string '0' antes para não aparecer somente um numero na tela
    let secString = `${seconds < 10 ? '0'+seconds : seconds}`;
    let minStrings = `${minutes < 10 ? '0'+minutes : minutes}`;

    //Retornando os minutos e segundos ja transformados em strings.
    return `${minStrings}:${secString}`
}