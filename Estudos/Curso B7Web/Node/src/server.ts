// Servidor - Este arquivo vai criar um servidor, e vai deixar rodando em uma porta do nosso computador.
// Usa o servidor com a biblioteca/framework chamado "Express" para criar um servidor ele suporta typescript, então instala os types dele tambem .
// Instalação express = npm install express

import express, { Request, Response, request } from 'express'

// Usando o express em uma constante.
const server = express()

// agora que ja tem o express em uma constante , Voce pode criar rotas através de metodos = GET, POST, PUT, DELETE que é uma função do express para criar as rotas e isso pode criar quantas paginas quiser. somente crindo o server.get e especificando a rota e no segundo parametro quando for passar a função anonima dela voce coloca o conteudo daquela rota quando o usuario acessar.

// Requisição = = ira mostrar na url a rota e toda a requisição.

//Requisição tipo POST = ira enviar os dados internamente. Utilizado para login ou cadastro, para não enviar os dados do usuario e aparecer na url, isso tudo acontece "internamente".

//Usando a requisição do metodo "GET" para criar esta rota "/" 
/*Criando a pagina principal -
     do servidor usando o get e nele voce passa 2 parametros , primeiro a rota principal do seu site usando o "/" , e o segundo parametro que seria uma função anonima.
*/
server.get('/', (req: Request, res: Response) => { 
    //Na função anonima do segundo parametro voce passa 2 parametros nessa função que seria o "Request"(Onde vai conter as informações desta requisição) e o "Response"(É onde vai ter o controle da resposta) que voce tem que importar tambem la do request e tipar ela aqui nos parametros.
    
    //Ele acessou a pagina principal ,que é o "/" do primeiro parametro do server.get , e depois que ele acessou, ele mando na tela uma mensagem com o res.send que é uma função.
    res.send('Ola Mundo!')

})

// Rota dinamica - Para fazer uma rota dinamica voce tem que usar ":" e colocar algum nome depois ex -  :slug , que este slug seria o que o usuario fosse digitar , e voce cria uma variavel com o mesmo nome que voce coloco depois do : , e nela voce coloca nesta variavel req.params.slug , ou o que voce coloco depois do : podendo ser outro nome não precisa ser slug.
server.get('/noticia/:slug', (req: Request, res: Response)=> {

    let slug: string = req.params.slug; //Para pegar os dados que o usuario mando na url . e salvando em uma variavel dinamicamente o que ele digitar.
    res.send(`Noticia : ${slug}`) //Agora mostra na tela o que o usuario escrevei voce usa a variavel, e o que ele digitar la em cima na url , vai aparecer quando voce usar esta variavel.
})

server.get('/voo/:origem-:destino', (req: Request, res: Response)=> {
    //Pode usar 2 params tambem , especificando na url aqui o exemplo de um voo que o usuario pode digitar um voo de 1 lugar para o outro , voce pode usar 2 params da mesma maneira , sempre usando o : e o que for depois vai ser dinamico do que o usuario escreveu. Vai fazer o mesmo procedimento salvar em uma variavel, e usar ela para mostrar em qualquer lugar do seu site/pagina que estiver acessando.
    let origem = req.params.origem;
    let destino = req.params.destino;

    //Pode pegar as informações do params em objeto para economizar codigo , pode fazer da maneira acima salvando uma em cada linha, ou da maneira abaixo vai salvar da mesma maneira mais em uma linha só usando objeto javascript
    // let {origem, destino} = req.params

    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})





// Criando uma outra pagina/rota com o server.get somente mudando a rota da pagina para /contato, no primeiro parametro da função. 
server.get('/contato', (req: Request, res: Response)=> {
    
    res.send("Esta é a pagina de contato.")

})


// Agora consegue rodar o servidor usando o listen e passando por parametro a porta que voce quer que ele fique observando. normalmente usado a porta 80(para http voce somente acessa localhost) ou 3000(só que quando voce executa na porta 3000 para ter acesso a ela voce precisa especificar qual porta quer acessar no navegador ex = localhost:3000). 
// Depois voce executa o arquivo no terminal usando o comando aqui npm run start-dev. que voce modificou no package.json
server.listen(80)