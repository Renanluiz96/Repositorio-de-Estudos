//Codigo SÍNCRONO  = Codigo assincrono é aquele codigo que executa linha após linha , e ele só vai executar a proxima linha a hora que a linha que estiver ja tenha acabado de executar
let nome = 'renan'
let sobrenome  = 'luiz'
let completo  = `${nome} ${sobrenome}`

//Codigo ASSÍNCRONO = Codigo assincrono é um codigo onde ele vai executando linha após linha , só que ele não espera a linha terminar para executar o que esta na proxima linha , ele vai executando , se tiver algo que dependa de algo de uma requisição , ou esperar uma ação acontecer , ele não vai ficar esperando para executar a próxima linha , ele vai ir executando , e a hora que por exemplo aquela linha que estava carregando ou esperando algo carregar , ele vai e executa ela sem ficar travando e esperar para a proxima execução . 
let nome1 = 'renan'
let sobrenome1  = 'luiz'
let temperatura = Maquininha.pegarTemperatura(); //Assincrona
let completo1  = `${nome} ${sobrenome}`
//Uma execução assincrona ela não fica esperando para poder continuar o codigo ela "destrava"

// Toda a requisição interna ela é uma requisição assincrona.
//Por exemplo em quanto o usuario esta digitando algo na barra de busca do google o que acontece o site vai la e faz uma requisição para o servidor do google para ele dar sugestões do que o usuario estiver digitando, Mas o usuario não vai ficar esperando o servidor do google retornar para ele  o resultado para ele fazer outra coisa . Se o usuario esta continuando digitando , a pagina vai continua sendo executada normalmente , ai quando o usuario receber esta resposta ai sim vai ser exibido para o usuaio esta resposta.