//Arquivo onde ficar contido todas as rotas relacionados ao site. Se o site for muito grande podera ter cada arquivo organizado para cada grupo de rotas especifico para cada area do site.

import { Request, Response, Router } from "express";

//Com o Router do express consegue se criar rotas em um arquivo separado e pré-configurado para usar la no servidor apenas importando as rotas criadas aqui , para que fique no servidor somente o uso , e não fique o arquivo do servidor cheio de rotas e bagunçado.

//Cria uma variavel para usar a função router. e depois configura todo as rotas que voce quiser e salva nesta variavel , para uso la no servidor.
const router = Router();

//Agora é apenas configurar , igual configuro a rota la no servidor, mais voce vai salvar ela na variavel que voce crio acima. Tem que importa tambem o Request e Response para criar aqui tambem exatamente como estava la no servidor.

router.get('/', (req: Request, res: Response) => {
    //res.send('Ola Mundo!')

    //Fazer uma exibição condicional voce tem que fazer ela aqui e depois mostar o resultado la no mustache, o arquivo mustache não faz verificações de condicionais la então voce faz aqui e usa la. 
    let age: number = 90;
    let showOld: boolean = false ; //Faz uma variavel que comeca como false. Faz uma verificação aqui caso for satisfeita voce altera o valor desse boolean para true assim . mandando esta variavel la no render . para ser mostrado . E la ele verifica se tiver true a variavel ele vai mostrar o conteudo na tela se tiver false ele não mostra o conteudo.
    if (age > 50) {
        showOld = true;
    }


    //Para usar o arquivo mustache tem que uar o .render e dentro dela voce coloca somente o nome da pagina que voce quer renderizar na tela como uma string.
    res.render('pages/home', {
        //Segundo parametro do render é um objeto contendo as informações que voce quer enviar para usar na tela  , do primeiro parametro . Podendo ser variaveis que voce cria aqui mesmo como esta ali acima , ou criar variaveis aqui mesmo .
        name: 'Renan',
        lastName: 'Luiz',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 20}
        ],
        frasesQualquer: [
            /*
            'Alguma frase boa',
            'Outra fase melhor ainda',
            'Esta frase é uma string ?'
            */
        ]
    })
})

router.get('/contato', (req: Request, res: Response) => {

    res.render('pages/contato')
})

router.get('/sobre', (req: Request, res: Response) => {

    res.render('pages/sobre')
})

router.get('/nome',(req: Request, res: Response) => {
    // Depois de ter enviado o formulario para a url para pegar o resultado desta informação voce pega com o "req" aqui do primeiro parametro.
    // Para pegar os dados da query strings da url como ele vai enviar os dados em um objeto , voce pega os dados do objeto ou seja o valor do objeto . Como vai retornar um objeto com {nome: nomedoobjeto} Ex = req.query.nome . Voce pega pela nome , e pode salvar em uma variavel para poder usar no render como segundo parametro. Mas quabdo for pegar o objeto , voce tem que dizer para o typescript o que vai vir do objeto query , normalmente uma string , pois toda a requisição quando é enviada é enviada via string ,mais voce tem que dizer para o typescript como vem passando o "as" e o que é como abaixo ali estou especificando no final

    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;
    


    // console.log("query strings" , req.query)


    res.render('pages/nome', {
        nome,
        idade
    })

})

router.get('/idade',(req: Request, res: Response) => {
    /*
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    //Se o usuario preencheu os dados no formulario e envio para o get  na url. Ele vau pegar esse dado e vai fazer a logica e no final ira alterar as variaveis acima pra mostrar na tela logo abaixo no render.
    if(req.query.ano) {
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        // Depois de pegar a data de nascimento do query da url digitada no formulario, e pegado o ano atual pela getfullyear do Date. Preencho a variavel idade que comeca como 0 com o ano atual menos o ano de nascimento para pegar a idade da pessoa. E seto a variavel mostrarIdade como true .  
        idade = anoAtual - anoNascimento;
        mostrarIdade = true
    }

    */
    res.render('pages/idade')
})

// FAZENDO UMA REQUISIÇÃO VIA POST DA PAGINA /IDADE E AO ENVIO DO FORMULARIO VAI ENVIAR PARA OUTRA URL /IDADE-RESULTADO.
router.post('/idade-resultado', (req: Request, res: Response)=> {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    //Só que agor eu troco o query que seria do metodo Get , para o corpo da requisição que seria  o body do methodo Post. Fazendo assim os dados não ira mais para a url , e sim serão enviado internamente.
    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
})

//Depois de criar a variavel , e configurar ela toda , voce exporta ela como default, exportando ela assim , na hora de importa la no servidor para uso , "voce pode chamar ela do que quiser" dependendo do contexto , para ficar mais facil o entendimento
export default router;